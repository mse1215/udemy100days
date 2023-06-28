const express = require("express");
const multer = require("multer");

const upload = multer({});
const router = express.Router();

router.get("/", function (req, res) {
  res.render("profiles");
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), function (req, res) {
  //모든 요청에 적용되지 않음. 일부 요청(양식 제출-파일 첨부)을 처리하는 router
  const uploadedImageFile = req.file(); //요청에 연결된 전체 데이터에 액세스 할 수 있음
  const userData = req.body; //name: username
});

module.exports = router;
