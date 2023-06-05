const fs = require("fs");
const path = require("path");

// const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); //localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>이름: </label><input type="text" name="username"><button>제출</button></form>'
  );
}); //localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  res.send("<h1>유저이름이 저장되었습니다!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);

// ===
// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200; // 존재하지 않는 사이트라면 주로 404 오류 메시지
//     response.end("<h1>" + new Date().toISOString() + "</h1>"); // 보내야 하는 메시지
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello World!</h1>");
//   }
//   //localhost:3000/currenttime (타임스탬프)
//   //localhost:3000
// }

// const server = http.createServer(function () {});

// server.listen(3000); //포트

// naver.com => 네이버 서버에 요청을 보내서 웹 사이트를 반환
// naver.com:80 -> 80이나 443 포트가 기본 설정
