// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for of
const users = ["세은", "민지", "여래"];

for (const user of users) {
  console.log(user);
}

//for in
const loggedInUser = {
  name: "세은",
  age: 31,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  //   console.log(loggedInUser.name);
  //   console.log(loggedInUser["name"]);
  console.log(loggedInUser[propertyName]);
}

//while
let isFinished = false;
while (!isFinished) {
  isFinished = confirm("끝?");
}

console.log("끝!");
