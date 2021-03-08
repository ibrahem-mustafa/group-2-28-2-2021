const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const data = require('./playground/sum')


const app = express();

app.get('/', (req, res) => {
  
  const result = data.sum(10, 40)
  // res.send('Hello')
  res.json( { result, results: data.results } )
})

app.post('/create', (req, res) => {
  res.json({msg: 'POST Request'})
})

app.put('/update', (req, res) => {
  res.json({msg: 'Put Request'})
})

app.delete('/delete', (req, res) => {
  res.json({msg: 'Delete Request'})
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
