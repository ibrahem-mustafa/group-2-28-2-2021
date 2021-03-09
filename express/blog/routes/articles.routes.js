const express = require('express')
const router = express.Router()


const articles = [];

router.get("/", (req, res) => {
  // res.send('Hello')
  res.json({
    articles,
  });
});

router.get("/:id", (req, res) => {
  // res.send('Hello')

  const { id } = req.params;

  const article = articles.find((a) => a.id == id);
  res.json({
    article,
  });
});

router.post("/", (req, res) => {
  const data = req.body;

  articles.push({
    id: articles.length + 1,
    title: data.title,
    content: data.content,
  });

  res.json({ articles });
});

router.put("/", (req, res) => {
  const { id, title, content } = req.body;

  // get article that math given id
  const article = articles.find((a) => a.id == id);
  // update article title & content
  article.title = title;
  article.content = content;
  // send response with updated article
  res.json({ article });
});

router.delete("/", (req, res) => {
  const { id } = req.body;
  // get index of article that matches given id
  const articleIndex = articles.findIndex((a) => a.id == id);
  // remove the article with that index from articles array;
  articles.splice(articleIndex, 1);
  // return response with the remaining article
  res.json({ articles });
});

module.exports = router;