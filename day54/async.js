const fs = require("fs/promises");

async function readFile() {
  let fileData;

  //   fs.readFile("data.txt", function (error, fileData) {
  //     console.log("File parsing done!");
  //     console.log(fileData.toString());
  //   });
  //  동기식
  //  노드JS에서 해당 파일을 읽고 구문 분석할 때까지 코드 실행이 차단됨 -> 순서대로 실행됨.
  //  sync 동기(순서대로), async 비동기(동시에 가능)

  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }

  console.log("File parsing done!");
  console.log(fileData.toString());
  //프로미스 방식 - 비동기 작업 처리에 유용. 콜백 or 프로미스 or 둘다 사용
  //파일 읽기에 성공했을 때만 데이터를 얻음
  console.log("안녕");
}
//async await 을 사용하여 단순화. then 버전으로 변환됨.
readFile();
