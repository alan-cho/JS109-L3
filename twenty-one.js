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
  Ace: [1, 11],
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
  playersCards = { Value: 0 };
  hit(true);
  hit(true);
  dealersCards = { Value: 0 };
  hit(false);
  hit(false);
  return;
}

function playersTurn() {
  let willHit;
  while (true) {
    let move = readline
      .question("Would You Like to Hit?\nYes or No: ")
      .toUpperCase()
      .trim();
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
  if (dealersCards["Value"] < 17) {
    willHit = true;
  } else {
    willHit = false;
  }

  return willHit;
}

function hit(isPlayersTurn) {
  let randomIndex = Math.floor(Math.random() * remainingCards.length);
  let card = remainingCards[randomIndex];
  remainingCards.splice(randomIndex, 1);
  if (isPlayersTurn) {
    playersCards[card] = null;
    calculateCardsValue(playersCards);
    return playersCards;
  } else {
    dealersCards[card] = null;
    calculateCardsValue(dealersCards);
    return dealersCards;
  }
}

function checkIfBust(cards) {
  if (cards["Value"] > 21) {
    return true;
  } else {
    return false;
  }
}

function checkPerfectValue(cards) {
  return cards["Value"] === 21;
}

function compareValues(playersCards, dealersCards) {
  return playersCards["Value"] > dealersCards["Value"];
}

function calculateCardsValue(cards) {
  let totalValue = 0;
  Object.keys(cards).forEach((card) => {
    if (card === "Value") {
      return;
    } else if (card === "Ace") {
      if (totalValue + 11 <= 21) {
        cards[card] = valueConversion[card][1];
        totalValue += valueConversion[card][1];
      } else {
        cards[card] = valueConversion[card][0];
        totalValue += valueConversion[card][0];
      }
    } else {
      cards[card] = valueConversion[card];
      totalValue += valueConversion[card];
    }
  });

  cards["Value"] = totalValue;
  return totalValue;
}

function gameLoop() {
  initializeGame();
  isPlayersTurn = true;

  while (true) {
    if (isPlayersTurn) {
      console.log("Dealer: ", dealersCards, "Player: ", playersCards);
      let willHit = playersTurn();

      if (willHit) {
        hit(isPlayersTurn);
      }

      if (checkPerfectValue(playersCards)) {
        console.log("Dealer: ", dealersCards, "Player: ", playersCards);
        return console.log("Player Won");
      }

      if (!willHit) {
        if (compareValues(playersCards, dealersCards)) {
          console.log("Dealer: ", dealersCards, "Player: ", playersCards);
          return console.log("Player Won");
        } else {
          console.log("Dealer: ", dealersCards, "Player: ", playersCards);
          return console.log("Dealer Won");
        }
      }

      if (checkIfBust(playersCards)) {
        console.log("Dealer: ", dealersCards, "Player: ", playersCards);
        return console.log("Dealer Won");
      }

      isPlayersTurn = false;
    } else {
      let willHit = dealersTurn(dealersCards);

      if (willHit) {
        hit(isPlayersTurn);
      }

      if (checkPerfectValue(dealersCards)) {
        console.log("Dealer: ", dealersCards, "Player: ", playersCards);
        return console.log("Dealer Won");
      }

      if (checkIfBust(dealersCards)) {
        console.log("Dealer: ", dealersCards, "Player: ", playersCards);
        return console.log("Player Won");
      }

      isPlayersTurn = true;
    }
  }
}

gameLoop();
