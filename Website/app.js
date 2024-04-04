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

let db = new sqlite3.Database('../database/identifier.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
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
