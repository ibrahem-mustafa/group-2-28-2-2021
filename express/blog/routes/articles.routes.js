const express = require("express");
const router = express.Router();

const { Article } = require("../models/article.model");
const { User } = require("../models/user.model");

router.get("/", async (req, res) => {
  // res.send('Hello')
  const articles = await Article.find();

  res.json({
    articles,
  });
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
  const { id } = req.params;
  //   // get index of article that matches given id
  //   const articleIndex = articles.findIndex((a) => a.id == id);
  //   // remove the article with that index from articles array;
  //   articles.splice(articleIndex, 1);
  //   // return response with the remaining article
    await Article.findByIdAndDelete(id)
  res.json({ msg: 'Article Deleted Successfully' });
});

module.exports = router;
