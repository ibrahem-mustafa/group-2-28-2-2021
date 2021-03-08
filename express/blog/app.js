const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const data = require('./playground/sum')


const app = express();




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// (REQUEST) => [HEAD, BODY] => HEAD (INFORMATION ABOUT REQUEST) | BODY (REQUEST DATA)

const articles = [];

app.get("/", (req, res) => {
  // res.send('Hello')
  res.json({
    articles
  });
});

app.post('/create', (req, res) => {

  const data = req.body;

  articles.push({
    id: articles.length + 1,
    title: data.title,
    content: data.content
  })

  res.json({articles})
})

app.put('/update', (req, res) => {

  const {id, title, content} = req.body;

  console.log(id)
  console.log(title)
  console.log(content)

  // console.log(id, title, content)

  res.json({msg: 'Put Request'})
})

app.delete('/delete', (req, res) => {
  res.json({msg: 'Delete Request'})
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
