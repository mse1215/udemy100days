const path = require("path");

const express = require("express");

const blogRoutes = require("./routes/blog");

const app = express();

// Activate EJS view engine
app.set("view engine", "ejs"); //설정 후
app.set("views", path.join(__dirname, "views")); // views 찾을 위치 알려줌

app.use(express.urlencoded({ extended: true })); // 수신 요청 본문이 구문 분석됨
app.use(express.static("public")); // 파일 로드할 수 있는지 확인

app.use(blogRoutes);

app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render("500");
  //문제가 발행할 때마다 500 오류 뜸
});

app.listen(3000);
