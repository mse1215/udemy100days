const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "<your-pw>",
});
// 연결 풀 생성

module.exports = pool;
