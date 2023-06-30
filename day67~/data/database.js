const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("file-demo"); // 아직 존재하지 않는 경우엔 자동으로 생성.
}

function getDb() {
  if (!database) {
    throw { message: "Database not connected!" };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
