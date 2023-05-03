let age = 31;
let userName = "세은";
let hobbies = ["게임", "뒹굴거리기", "딱히 없음"];
let job = {
  title: "직장인",
  place: "서울",
  salary: 10000000,
};

let totalAdultYears;

function calaulateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calaulateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calaulateAdultYears(age);
alert(totalAdultYears);

let person = {
  name: "세은",
  greet() {
    alert("안녕!");
  },
};

person.greet();
