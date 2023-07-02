const readline = require("readline-sync");
const deck = {
  Spades: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ],
  Hearts: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ],
  Diamonds: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ],
  Cloves: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ],
};
const valueConversion = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Aces: [1, 11],
};
let remainingCards;
let isPlayersTurn;
let playersCards;
let dealersCards;

function initializeGame() {
  remainingCards = [].concat(
    deck["Spades"],
    deck["Hearts"],
    deck["Diamonds"],
    deck["Cloves"]
  );
  playersCards = {};
  dealersCards = {};
  return;
}

function playersTurn() {
  let willHit;
  let move = readline
    .question("Would You Like to Hit?\nYes or No: ")
    .toUpperCase()
    .trim();
  while (true) {
    if (move === "YES" || move === "Y") {
      willHit = true;
      break;
    } else if (move === "NO" || move === "N") {
      willHit = false;
      break;
    }
    console.log("Please input a valid answer.");
  }

  return willHit;
}

function dealersTurn(dealersCards) {
  let willHit;
  if (dealersCards < 17) {
    willHit = true;
  } else {
    willHit = false;
  }

  return willHit;
}

function hit(isPlayersTurn) {
  let randomIndex = Math.floor(Math.random * remainingCards.length);
  let card = remainingCards[randomIndex];
  remainingCards.splice(randomIndex, 1);
  if (isPlayersTurn) {
    playersCards[card] = null;
    return playersCards;
  } else {
    dealersCards[card] = null;
    return dealersCards;
  }
}

function bust(cards) {
  let totalValue = calculateCardsValue(cards);
  cards["Value"] = totalValue;

  if (cards["Value"] > 21) {
    return true;
  } else {
    return false;
  }
}

function calculateCardsValue(cards) {
  let totalValue = 0;
}
