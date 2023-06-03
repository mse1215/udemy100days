const fs = require("fs");

function readFile() {
  let fileData;
  try {
    const fileData = fs.readFileSync("data.json");
  } catch {
    console.log("에러 발생");
  }
  console.log(fileData);
  console.log("안녕");
}

readFile();
