function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1'=> 1  숫자로 변경 굿
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); // 이 부분 잘 모르겠음. new?
  const enteredPlayername = formData.get("playername").trim(); //앞이나 뒤 공백 제거. 빈 문자열을 submit하면 falsy.

  if (!enteredPlayername) {
    //enteredPlayername === ""
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "이름을 입력하세요!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
} // function 안에 const 썼을 때 꼭 function 범위 확인하기★★★
