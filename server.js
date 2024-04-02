const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 8056;

const session = require('express-session');

app.use(session({
  secret: 'your-secret-key', //still jave to replace with a real secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// Parse JSON bodies
app.use(express.json());


let db = new sqlite3.Database('identifier.sqlite',sqlite3.OPEN_READWRITE,(err) =>{
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Serve static files from the "public" directory
app.use(express.static(__dirname));

// Define routes for your pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  db.all('SELECT * FROM user', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

app.get('/api/books', (req, res) => {
  db.all('SELECT * FROM Book', [], (err, rows) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
});

app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  db.get('SELECT * FROM user WHERE first_name = ?', [name], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row || row.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Store user's ID in the session
    req.session.userId = row.id;

    res.json({ success: true, message: 'Login successful', user: { id: row.id, name: row.first_name } });
  });
});

app.post('/api/signup', (req, res) => {
  const { first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method, password } = req.body;


  // Check if user already exists
  db.get('SELECT * FROM user WHERE first_name = ?', [first_name], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (row) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    // Insert new user
    db.run('INSERT INTO user (password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // Store user's ID in the session
      req.session.userId = this.lastID;

      res.json({ success: true, message: 'Signup successful', user: { id: this.lastID, name: first_name } });
    });
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});