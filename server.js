const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 8056;

let db = new sqlite3.Database('databases/identifier.sqlite',sqlite3.OPEN_READWRITE,(err) =>{
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

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM user WHERE username = ?', [username], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row || row.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful' });
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});