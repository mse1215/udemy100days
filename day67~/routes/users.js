const express = require("express");
const multer = require("multer");

const db = require("../data/database");

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images"); //multer는 세번째 매개변수 값에 관한 함수를 제공. 여기서는 이 함수에 관해 두 가지 값을 기대함. 첫번째: 잠재적인 오류, 두번쨰: 파일 지정 경로
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// const upload = multer({ dest: "Images" }); //images 폴더에 저장
const upload = multer({ storage: storageConfig });
const router = express.Router();

router.get("/", async function (req, res) {
  const users = await db.getDb().collection("users").find().toArray();
  res.render("profiles", { user: users });
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), async function (req, res) {
  //모든 요청에 적용되지 않음. 일부 요청(양식 제출-파일 첨부)을 처리하는 router
  const uploadedImageFile = req.file; //요청에 연결된 전체 데이터에 액세스 할 수 있음
  const userData = req.body; //name: username

  await db.getDb().collection("users").insertOne({
    name: userData.username,
    imagePath: uploadedImageFile.path,
  });

  res.redirect("/");
});

module.exports = router;
