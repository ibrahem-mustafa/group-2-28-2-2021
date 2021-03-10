const express = require("express");
const router = express.Router();

const { Article } = require("../models/article.model");
const { User } = require("../models/user.model");
const jwt  = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/secrets')

router.get("/", async (req, res) => {
  // res.send('Hello')
  try {
    
    const token = req.headers.authorization.split(" ")[1];

    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);
    const articles = await Article.find({'publisher.id': user.id});

    res.json({
      articles,
    });
  } catch(err) {
    res.status(400).json({msg: 'Invalid User Token'})
  }
});

// router.get("/:id", (req, res) => {
//   // res.send('Hello')

//   const { id } = req.params;

//   const article = articles.find((a) => a.id == id);
//   res.json({
//     article,
//   });
// });

router.post("/", async (req, res) => {
  // TODO: 1: remove publisherId from the body
  // TODO: 2: get token from headers
  // TODO: 3: verify user token
  // TODO: 4: create article with user data

  const { title, content, publisherId } = req.body;

  const user = await User.findById(publisherId);

  const article = new Article({
    title,
    content,
    publisher: {
      id: user.id,
      name: user.name,
    },
  });

  await article.save();

  res.json({ article });
});

router.put("/:id", async (req, res) => {
  // TODO: 1: get token from headers
  // TODO: 2: verify user token
  // TODO: 3: update article

  const { id } = req.params;
  const { title, content } = req.body;

  //   get article that math given id
  //     const article = await Article.findById(id)

  //     // update article title & content
  //     article.title = title;
  //     article.content = content;
  // //
  //     await article.save()

  const article = await Article.findByIdAndUpdate(
    id,
    {
      title,
      content,
    },
    {
      new: true,
    }
  );
  // send response with updated article
  res.json({ article });
});

router.delete("/:id", async (req, res) => {
  // TODO: 1: get token from headers
  // TODO: 2: verify user token
  // TODO: 3: delete article

  const { id } = req.params;
  //   // get index of article that matches given id
  //   const articleIndex = articles.findIndex((a) => a.id == id);
  //   // remove the article with that index from articles array;
  //   articles.splice(articleIndex, 1);
  //   // return response with the remaining article
  await Article.findByIdAndDelete(id);
  res.json({ msg: "Article Deleted Successfully" });
});

module.exports = router;
