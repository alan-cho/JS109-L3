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

function getPlayersPiece() {
  while (true) {
    prompt("Choose your piece: X or O");
    playersPiece = readline.question().toUpperCase();
    if (playersPiece === "X") {
      computersPiece = "O"; //What does it mean it doesn't get read?
      break;
    } else if (playersPiece === "O") {
      computersPiece = "X";
      break;
    }
    console.log("Please enter a valid piece.");
  }

  return;
}

function playersTurn(piece) {
  while (true) {
    prompt("Select the square you'd like to play: 1-9");
    let square = readline.question.trim();
    if (boardValues[square] === " ") {
      makeMove(square, piece, boardValues);
      break;
    }
    console.log("Please enter a valid square.");
  }

  displayBoard(boardValues);
  isPlayersTurn = false;
  return;
}

function computersTurn(piece, boardValues) {
  while (true) {
    let square = Math.floor(Math.random() * boardValues.length);
    if (boardValues[square] === " ") {
      makeMove(square, piece, boardValues);
      break;
    }
  }

  displayBoard(boardValues);
  isPlayersTurn = true;
  return;
}

function makeMove(square, piece, boardValues) {
  boardValues[square] = `${piece}`;
  return;
}

function checkWinner(playersPiece, computersPiece, boardValues) {
  let didPlayerWin = winConditions(playersPiece, boardValues);
  let didComputerWin = winConditions(computersPiece, boardValues);

  if (didPlayerWin) {
    return "Player Won";
  } else if (didComputerWin) {
    return "Computer Won";
  } else {
    return false;
  }
}

function winConditions(piece, boardValues) {
  const conditionals = [
    [boardValues[0], boardValues[1], boardValues[2]],
    [boardValues[3], boardValues[4], boardValues[5]],
    [boardValues[6], boardValues[7], boardValues[8]],
    [boardValues[0], boardValues[3], boardValues[6]],
    [boardValues[1], boardValues[4], boardValues[7]],
    [boardValues[2], boardValues[5], boardValues[8]],
    [boardValues[0], boardValues[4], boardValues[8]],
    [boardValues[2], boardValues[4], boardValues[6]],
  ];

  for (let conditional of conditionals) {
    if (
      conditional[0] === piece &&
      conditional[1] === piece &&
      conditional[2] === piece
    ) {
      return true;
    }
  }

  return false;
}

function gameLoop(playersPiece) {
  initializeBoard();
  displayBoard();

  if (playersPiece === "O") {
    isPlayersTurn = true;
  } else {
    isPlayersTurn = false;
  }

  while (true) {
    if (checkWinner(playersPiece, computersPiece, boardValues) !== false) {
      return console.log(
        checkWinner(playersPiece, computersPiece, boardValues)
      );
    } else if (!boardValues.includes(" ")) {
      return console.log("It's a Tie");
    }

    if (isPlayersTurn) {
      playersTurn();
    } else {
      computersTurn();
    }
  }
}

let isPlayersTurn;
let playersPiece;
let computersPiece;

getPlayersPiece();
gameLoop(playersPiece);
