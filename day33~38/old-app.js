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

// 요소 지우기
//1. 삭제할 요소 선택하기

let firstH1Element = document.querySelector("h1");

//2. 삭제하기

//firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // 옛날 버전 브라우저용

//요소 이동하기
firstPharagraph.parentElement.append(firstPharagraph);

//innerHTML

console.log(firstPharagraph.innerHTML);

firstPharagraph.innerHTML = "안녕! 이건 <strong>중요해!</strong>";
