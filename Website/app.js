
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();
const crypto = require('crypto');

const session = require('express-session');

//set up different routers for each page
var indexRouter = require('./routes/index.js');
var authorRouter = require('./routes/author.js');
var catalogRouter = require('./routes/catalog.js');
var housesRouter = require('./routes/houses.js');
var infoRouter = require('./routes/info.js');
var loginRouter = require('./routes/login.js');
var reviewsRouter = require('./routes/reviews.js');
var sequelsRouter = require('./routes/sequels.js');
var settingRouter = require('./routes/setting.js');
var signupRouter = require('./routes/signup.js');
var reserveRouter = require('./routes/reserve.js');

var app = express();
app.use(cookieParser());
const { v4: uuidv4 } = require('uuid');

app.use(session({
  genid: function(req) {
    return uuidv4() // use UUIDs for session IDs
  },
  name: "sessionID cookie",
  secret: 'megaextremelysecretkeythatnobodywillguess', //still have to replace with a real secret key
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
app.use('/reserve', reserveRouter);

let db = new sqlite3.Database('database/newidentifier.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  else{
    console.log('Connected to the SQLite database.');
  }
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
      //console.log(rows);
      res.json(rows);
  });
});



/**
The /api/login route extracts the name and password from the request body.
It queries the database for a user with the provided name.
If an error occurs during the query, it responds with a 500 status code and the error message.
If no user is found or if the provided password doesn't match the user's password, it responds with a 401 status code and an error message.
If a user is found and the password matches, it stores the user's ID and name in the session.
It responds with a JSON object containing a success message and the user's ID and name.
 */
app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  // Hash the password
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

  db.get('SELECT * FROM user WHERE first_name = ?', [name], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row || row.password !== hashedPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    console.log('User ID:', row.user_id);
    console.log('User name:', row.first_name);

    // Store user's ID in the session
    req.session.userId = row.user_id;
    req.session.name = row.first_name;

    res.json({ success: true, message: 'Login successful', user: { id: row.user_id, name: row.first_name } });

  });
});

app.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
      if (err) {
          console.log(err);
      } else {
          res.redirect('login.html')
      }
  });
});

/**
The /api/signup endpoint extracts the user's details from the request body. These details include the user's first name, last name, address, postcode, telephone number, date of birth, subscription type, payment method, and password.
It checks if a user already exists with the provided first name by querying the database. If an error occurs during this query, it responds with a 500 status code and the error message. If a user is found, it responds with a 400 status code and an error message indicating that the username is already taken.
If no user is found with the provided first name, it inserts a new user into the database with the provided details. If an error occurs during this insertion, it responds with a 500 status code and the error message.
After successfully inserting the new user, it stores the new user's ID in the session. This is done so that the server can remember who the user is across multiple requests.
Finally, it responds with a JSON object containing a success message and the new user's ID and first name.
 */
app.post('/api/signup', (req, res) => {
  const { first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method, password } = req.body;

  // Hash the password and other sensitive information
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  const hashedAddress = crypto.createHash('sha256').update(address).digest('hex');
  const hashedPostcode = crypto.createHash('sha256').update(postcode).digest('hex');
  const hashedTelephoneNumber = crypto.createHash('sha256').update(telephone_number).digest('hex');
  const hashedDateOfBirth = crypto.createHash('sha256').update(date_of_birth).digest('hex');
  const hashedSubscriptionType = crypto.createHash('sha256').update(subscription_type).digest('hex');
  const hashedPaymentMethod = crypto.createHash('sha256').update(payment_method).digest('hex');

  // Check if user already exists
  db.get('SELECT * FROM user WHERE first_name = ?', [first_name], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (row) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    // Insert new user
    db.run('INSERT INTO user (password, first_name, last_name, address, postcode, telephone_number, date_of_birth, subscription_type, payment_method) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [hashedPassword, first_name, last_name, hashedAddress, hashedPostcode, hashedTelephoneNumber, hashedDateOfBirth, hashedSubscriptionType, hashedPaymentMethod], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // Store user's ID in the session
      req.session.userId = this.lastID;

      return res.json({ success: true, message: 'Signup successful', user: { id: this.lastID, name: first_name } });
    });
  });
});




/** TODO DELETE THIS ROUTE THIS DELETES A USER FROM THE DATABASE, USED FOR THE HASHING VALUES TESTING
*/
app.get('/delete/:userId', (req, res) => {
  const userId = req.params.userId;
/** TODO DELETE THIS ROUTE THIS DELETES A USER FROM THE DATABASE, USED FOR THE HASHING VALUES TESTING
*/
  // Delete the user from the database
  db.run('DELETE FROM user WHERE user_id = ?', [userId], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
/** TODO DELETE THIS ROUTE THIS DELETES A USER FROM THE DATABASE, USED FOR THE HASHING VALUES TESTING
*/
    // Check if any rows were affected
    if (this.changes === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
/** TODO DELETE THIS ROUTE THIS DELETES A USER FROM THE DATABASE, USED FOR THE HASHING VALUES TESTING
*/
    return res.json({ success: true, message: 'User deleted successfully' });
  });
});
/** This API route returns the name of the current user from the session.
 It checks if there is a user ID in the session. If not, it returns an error.
 It retrieves the user from the database based on the user ID.
 If the user is not found, it returns an error.
 Finally, it responds with a JSON object containing the user's name.
*/
app.get('/api/current-user', (req, res) => {
  if (!req.session.userId) {
    // If there's no user ID in the session, return undefined
    return res.json({ name: undefined});
  }
  //TODO for the users page we might want to expand this, to include other user information

  // Get the user from the database 
  db.get('SELECT * FROM user WHERE user_id = ?', [req.session.userId], (err, row) => {
    console.log("HALLLLLLOOOOOOOO");
    if (err) {
      console.log('Database error:', err.message);
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      // If there's no user with the given ID, return an error
      return res.status(404).json({ error: 'User not found' });
    }
    // Return just the user's name since that is the only thing we need right now
    return res.json({user_id:row.user_id, name: row.first_name, last_name: row.last_name,address:row.address,postcode:row.postcode,telephone_number:row.telephone_number,date_of_birth: row.date_of_birth,subscription_type:row.subscription_type,payment_method:row.payment_method });
    
  });
});

//reservation
app.post('/api/reserve', (req, res) => {
  const { user_id, title} = req.body;

  // Retrieve the book ID based on the title
  db.get('SELECT Book_id FROM Book WHERE title = ?', [title], (err, row) => {
      if (err) {
        console.log("hier1")
          return res.status(500).json({ error: err.message });
          
      }

      if (!row) {
        console.log("hier2")
          return res.status(404).json({ error: err.message });
      }

      const book_id = row.Book_id;
      console.log(book_id);

      // Check if book already reserved
      db.get('SELECT * FROM reservation WHERE book_id = ?', [book_id], (err, row) => {
          if (err) {
            console.log("hier3")
              return res.status(500).json({ error: err.message});
          }

          if (row) {
            console.log("hier4")
              return res.status(404).json({ error: 'book already taken' });
          }

          // Insert new reservation
          db.run('INSERT INTO reservation (user_id, book_id, reservation_date) VALUES (?, ?, 12345678)', [user_id, book_id], function (err) {
              if (err) {
                console.log("womp womp");
                  return res.status(500).json({ error: err.message });
              }

              // Store reservation ID in the session if needed
              req.session.reservation_id = this.lastID;

              return res.json({ success: true, message: 'Book reserved successfully', reservation: { id: this.lastID, book_id: book_id } });
          });
      });
  });
});

app.get('/api/user-reservations', (req, res) => {
  if (!req.session.userId) {
    // If there's no user ID in the session, return undefined
    return res.json({ name: undefined });
  }

  // Get the user's reservations including book titles
  const sql = `
    SELECT reservation.reservation_id, reservation.book_id, book.title
    FROM reservation
    JOIN book ON reservation.book_id = book.book_id
    WHERE reservation.user_id = ?`;

  db.all(sql, [req.session.userId], (err, rows) => {
    if (err) {
      console.log('Database error:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    if (!rows || rows.length === 0) {
      // If there are no reservations for the user, return an empty array
      return res.json([]);
    }

    // Return reservations with book titles
    return res.json(rows);
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

//db.close();
module.exports = app;
