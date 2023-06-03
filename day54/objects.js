// const job = {
//   title: "개발자",
//   location: "뉴욕",
//   salary: 50000,
// };
// //수동으로

const { describe } = require("node:test");

// console.log(new Date().toISOString());
// //현재 시간.

// const job2 = {
//   title: "요리사",
//   location: "서울",
//   salary: 35000,
// };

class Job {
  //대문자
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  describe() {
    console.log(
      `내 직업은 ${this.title}, ${this.location}에서 일하며 ${this.salary}만원을 법니다.`
    );
  }
}

const developer = new Job("개발자", "뉴욕", 500);
const cook = new Job("요리사", "서울", 350);

developer.describe();
cook.describe();
