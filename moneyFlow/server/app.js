const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")

const connectDB = require('./config/db')
connectDB()

const authRoutes = require('./routes/auth.routes')
const swiftRoutes = require('./routes/swift.routes');

const app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRoutes)
app.use('/swift', swiftRoutes)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
