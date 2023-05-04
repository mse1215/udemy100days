console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4); // 나머지 -> 2
console.log(10 % 3); // 나머지 -> 1

let result = 10 * 4;
result++; // result = result + 1
result--; // result = result - 1

result += 5; // result = result + 5
result -= 5; // result = result - 5
result /= 5; // result = result / 5
result *= 5; // result = result * 5

console.log("문" + "  " + "세은");
console.log("문" - "세은"); // NaN

let userName = "문세은";
console.log(userName.length);
console.log(userName.toUpperCase); // 한글이라 무의미

let hobbies = ["게임", "뒹굴거리기"];
console.log(hobbies.length); // 배열의 length는 개수
