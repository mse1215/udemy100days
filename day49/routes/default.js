const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  //router: app 과 비슷한 역할을 함. app 대체 가능.
  res.render("index");
});

router.get("/about", function (req, res) {
  res.render("about");
});

module.exports = router;
