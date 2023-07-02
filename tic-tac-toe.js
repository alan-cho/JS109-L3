function displayBoard(boardValues) {
  console.log("");
  console.log("     |     |     ");
  console.log(
    `  ${boardValues[0]}  |  ${boardValues[1]}  |  ${boardValues[2]}  `
  );
  console.log("     |     |     ");
  console.log("-----+-----+-----");
  console.log("     |     |     ");
  console.log(
    `  ${boardValues[3]}  |  ${boardValues[4]}  |  ${boardValues[5]}  `
  );
  console.log("     |     |     ");
  console.log("-----+-----+-----");
  console.log("     |     |     ");
  console.log(
    `  ${boardValues[6]}  |  ${boardValues[7]}  |  ${boardValues[8]}  `
  );
  console.log("     |     |     ");
  console.log("");
}

function initializeBoard() {
  let boardValues = [];
  for (let i = 0; i <= 8; i += 1) {
    boardValues[i] = " ";
  }

  return boardValues;
}

initializeBoard();
