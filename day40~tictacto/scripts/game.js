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
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("빈칸을 선택하세요");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerId = checkforGameOver();
  console.log(winnerId);

  currentRound++;
  switchPlayer();
}

function checkforGameOver() {
  // if (
  //   gameData[0][0] > 0 &&
  //   gameData[0][0] === gameData[0][1] &&
  //   gameData[0][1] === gameData[0][2] //[0][0]===[0][1]===[0][2] 랑 다른가??
  // ) {
  //   return gameData[0][0];
  // }
  // if (
  //   gameData[1][0] > 0 &&
  //   gameData[1][0] === gameData[1][1] &&
  //   gameData[1][1] === gameData[1][2]
  // ) {
  //   return gameData[1][0];
  // }
  // if (
  //   gameData[2][0] > 0 &&
  //   gameData[2][0] === gameData[2][1] &&
  //   gameData[2][1] === gameData[2][2]
  // ) {
  //   return gameData[2][0];
  // }

  //행 확인
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2] //[0][0]===[0][1]===[0][2] 랑 다른가??
    ) {
      return gameData[i][0];
    }
  }
  //열 확인
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i] //[0][0]===[0][1]===[0][2] 랑 다른가??
    ) {
      return gameData[0][i];
    }
  }
  //대각선 확인 왼위->오아
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  //대각선 확인 오위->왼아
  if (
    gameData[2][2] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1; // 무승부. -1이 왜 무승부인데요...
  }
}
