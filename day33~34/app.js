// document.body.children[1].children[0].href = "http://google.com";
// alert(window);
// window.alert(); -> 두 코드는 같은 말임.

let anchorElement = document.getElementById("external-link");
anchorElement.href = "http://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href =
  "https://www.udemy.com/courses/development/web-development/";

//요소 추가하기
//1. 요소 만들기

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "http://google.com";
newAnchorElement.textContent = "구글 연결";

//2. 부모 요소에 접근하기

let firstPharagraph = document.querySelector("p");

//3. 새로운 요소 넣기

firstPharagraph.appendChild(newAnchorElement);
