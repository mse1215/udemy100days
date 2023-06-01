const hobbies = ["Sports", "Cooking"]; // 배열에 대한 포인터가 저장됨
const age = 32; // 값 자체가 변수에 저장됨

hobbies.push("Reading"); // 배열의 주소는 변경되지 않음

// hobbies = ['Coding', 'Sleeping']; // 재정의는 허용되지 않음

console.log(hobbies);

// Primitive values: numbers, strings, booleans & more (undefined)
//-> 원시값. 단순.
// Reference values: Objects 객체

const person = { age: 32 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  // return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);
