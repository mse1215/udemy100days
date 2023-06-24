const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  //async 키워드를 사용해서 비동기 함수로 변환한 다음
  const client = await MongoClient.connect("mongodb://localhost:27017"); //await 키워드를 사용해서 이 작업이 완료될 때까지 대기, 우리가 현재 가지고 있는 데이터베이스 클라이언트를 제공.
  database = client.db("blog"); //.db메소드를 호출하여 해당 서버의 블로그 데이터베이스와 실제로 통신.
}

function getDb() {
  if (!database) {
    throw { message: "데이터 베이스 연결이 설정되지 않았습니다!" };
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};
