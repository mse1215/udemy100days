function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("플레이어의 이름을 모두 입력해주세요");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer];
}

function selectGameField(event) {
  if (event.target.tagname !== "LI") {
    return;
  }

  const selectGameField = event.target;
  const selectedColumn = selectGameField.dataset.col - 1;
  const selectedRow = selectGameField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("빈칸을 선택하세요");
    return;
  }

  selectGameField.textContent = players[activePlayer].symbol;
  selectGameField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  switchPlayer();
}
