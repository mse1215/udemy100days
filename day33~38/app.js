let paragraphElement = document.querySelector("p");

function changeParaghraphText() {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clicked!");
}

paragraphElement.addEventListener("click", changeParaghraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  //let enteredText = inputElement.value;
  let enteredText = event.target.value;
  //let enteredText = event.data; -> 이건 다른 결과값
  console.log(enteredText);
  //console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
