const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "pw",
});
// 연결 풀 생성.
//비밀번호 확인 혹은 변경 필요 ★
module.exports = pool;
