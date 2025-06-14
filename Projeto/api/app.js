var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var indexRouter = require('./routes/index');




const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')

require('./config/passport')(passport);




var app = express();
// config/db.js
var db = mongoose.connection;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/euDigital';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/files', express.static(path.join(__dirname, 'uploads/aips')));


app.use(session({
  secret: 'aMinhaChaveSecreta',
  resave: false,
  saveUninitialized: false
}))

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));




app.use(passport.initialize())
app.use(passport.session())
app.use('/', indexRouter);
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
