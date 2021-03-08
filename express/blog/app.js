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


app.get("/:id", (req, res) => {
  // res.send('Hello')

  const {id} = req.params

  const article = articles.find(a => a.id == id);
  res.json({
    article
  });
});

app.post('/', (req, res) => {

  const data = req.body;

  articles.push({
    id: articles.length + 1,
    title: data.title,
    content: data.content
  })

  res.json({articles})
})

app.put('/', (req, res) => {

  const {id, title, content} = req.body;

  // get article that math given id
  const article = articles.find(a => a.id == id);
  // update article title & content
  article.title = title;
  article.content = content;
  // send response with updated article
  res.json({article})
})

app.delete('/', (req, res) => {

  const {id} = req.body
  // get index of article that matches given id
  const articleIndex = articles.findIndex(a => a.id == id)
  // remove the article with that index from articles array;
  articles.splice(articleIndex, 1)
  // return response with the remaining article
  res.json({articles})
  
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
