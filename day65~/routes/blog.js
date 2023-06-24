const express = require("express");
const mongodb = require("mongodb");

const db = require("../data/database");

const ObjectId = mongodb.ObjectId; // 함수, 정확히 말하면 인스턴스화 할 수 있는 클래스

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", function (req, res) {
  res.render("posts-list");
});

router.get("/new-post", async function (req, res) {
  const authors = await db.getDb().collection("authors").find().toArray(); //mongoDB 데이터베이스에서 해당 작성자의 컬렉션에 대한 액세스를 설정
  res.render("create-post", { authors: authors });
});

router.post("/posts", async function (req, res) {
  const authorId = new ObjectId(req.body.author);
  const author = await db
    .getDb()
    .collection("authors")
    .findOne({ _id: authorId });

  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  };

  const result = await db.getDb().collection("posts").insertOne(newPost);
  console.log(result);
  red.redirect("/posts");
});

module.exports = router;
