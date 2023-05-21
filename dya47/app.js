const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200; // 존재하지 않는 사이트라면 주로 404 오류 메시지
    response.end("<h1>" + new Date().toISOString() + "</h1>"); // 보내야 하는 메시지
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
  //localhost:3000/currenttime (타임스탬프)
  //localhost:3000
}

const server = http.createServer(handleRequest);

server.listen(3000); //포트

// naver.com => 네이버 서버에 요청을 보내서 웹 사이트를 반환
// naver.com:80 -> 80이나 443 포트가 기본 설정

//해결 필요★
//Error: Cannot find module 'C:\Users\세은\Documents\HelloWorld\udemy100days\day1~9\app.js'
