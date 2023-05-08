const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//console.dir(productNameInputElement); 로 확인하고 속성 참고하기

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemaningChars(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingChars = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingChars;
}

productNameInputElement.addEventListener("input", updateRemaningChars);
