var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();

const session = require('express-session');

var indexRouter = require('./routes/index');
var authorRouter = require('./routes/author');
var catalogRouter = require('./routes/catalog');
var housesRouter = require('./routes/houses');
var infoRouter = require('./routes/info');
var loginRouter = require('./routes/login');
var reviewsRouter = require('./routes/reviews');
var sequelsRouter = require('./routes/sequels');
var settingRouter = require('./routes/setting');
var signupRouter = require('./routes/signup');

var app = express();

app.use(session({
  secret: 'your-secret-key', //still have to replace with a real secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// view engine setup
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/author', authorRouter);
app.use('/catalog', catalogRouter);
app.use('/houses', housesRouter);
app.use('/info', infoRouter);
app.use('/login', loginRouter);
app.use('/reviews', reviewsRouter);
app.use('/sequels', sequelsRouter);
app.use('/setting', settingRouter);
app.use('/signup', signupRouter);

let db = new sqlite3.Database('database/identifier.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// define some of the API routes
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
      console.log(rows);
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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
