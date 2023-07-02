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
  //Validates the user's input
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

  return playersPiece, computersPiece;
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

  return;
}

function makeMove(square, piece, boardValues) {
  boardValues[square] = `${piece}`;
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

  return;
}

let isPlayersTurn;
let playersPiece;
let computersPiece;
