const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config');
const methodOverride = require('method-override');
const router = require('./routes/router');
// const studRouter = require('./routes/studRouter');
// const idRouter = require('./routes/idRouter');
// const addRouter = require('./routes/addRouter');
const app = express();

const hostname = config.hostname;
const port = config.port;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.send('Hello World!'));

// routes
app.use(methodOverride('_method'));
app.use('/', router);
// app.use('/students', idRouter);
// app.use('/students/add', addRouter);


//css files
app.use('/public', express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
