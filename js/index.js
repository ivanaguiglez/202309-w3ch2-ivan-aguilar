const suits = ["♥️", "♦️", "♠️", "♣️"];
const cardValue = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const cardNumeration = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1,
];

const gameScreenElement = document.querySelector(".game-screen");
const startButtonElement = document.querySelector("start.button");
const playerCardElement = document.querySelector(".player-card");
const upperNumberPlayer = playerCardElement.querySelector(
  ".card-upper-numeration"
);
const bottomNumberPlayer = playerCardElement.querySelector(
  ".card-bottom-numeration"
);
const suitIconPlayer = playerCardElement.querySelector(".card-suit");
const computerCardElement = document.querySelector(".computer-card");
const upperNumberComputer = computerCardElement.querySelector(
  ".card-upper-numeration"
);
const bottomNumberComputer = computerCardElement.querySelector(
  ".card-bottom-numeration"
);
const suitIconComputer = computerCardElement.querySelector(".card-suit");
const startGame = document.querySelector(".start-button");
const equalChoice = document.querySelector(".equal");
const greaterChoice = document.querySelector(".greater");
const smallerChoice = document.querySelector(".smaller");
const resultButtons = document.querySelector(".choice");
const resultMessage = document.querySelector(".cards-result-message");

const getDeck = () => {
  const deck = [];
  suits.forEach((suit) => {
    cardValue.forEach((cardValue) => {
      deck.push({ cardValue, suit });
    });
  });
  deck.forEach((card, position) => {
    card.number = cardNumeration[position];
  });
  return deck;
};

getRandomCard = () => {
  randomCard = getDeck()[Math.floor(Math.random() * getDeck().length)];
  return randomCard;
};

let shownCard = getRandomCard();
let hiddenCard = getRandomCard();

const getValueComparation = () => {
  if (hiddenCard.cardValue === shownCard.cardvalue) {
    return "iguale";
  } else if (shownCard.cardValue < hiddenCard.cardValue) {
    return "mayor";
  } else {
    return "menor";
  }
};

startGame.addEventListener("click", () => {
  gameScreenElement.classList.remove("hidden");
  startGame.classList.add("hidden");

  upperNumberPlayer.textContent = shownCard.number;
  bottomNumberPlayer.textContent = shownCard.number;
  suitIconPlayer.textContent = shownCard.suit;

  upperNumberComputer.textContent = hiddenCard.number;
  bottomNumberComputer.textContent = hiddenCard.number;
  suitIconComputer.textContent = hiddenCard.suit;
});

equalChoice.addEventListener("click", () => {
  upperNumberComputer.classList.remove("hidden");
  bottomNumberComputer.classList.remove("hidden");
  suitIconComputer.classList.remove("hidden");

  if (getValueComparation() === "igual") {
    resultMessage.textContent = "¡Has ganado!🤩";
  } else {
    resultMessage.textContent = "Has perdido. ¡Prueba otra vez!😭";
  }
});

greaterChoice.addEventListener("click", () => {
  upperNumberComputer.classList.remove("hidden");
  bottomNumberComputer.classList.remove("hidden");
  suitIconComputer.classList.remove("hidden");
  if (getValueComparation() === "mayor") {
    resultMessage.textContent = "¡Has ganado!🤩";
  } else {
    resultMessage.textContent = "Has perdido. ¡Prueba otra vez!😭";
  }
});

smallerChoice.addEventListener("click", () => {
  upperNumberComputer.classList.remove("hidden");
  bottomNumberComputer.classList.remove("hidden");
  suitIconComputer.classList.remove("hidden");
  if (getValueComparation() === "menor") {
    resultMessage.textContent = "¡Has ganado!🤩";
  } else {
    resultMessage.textContent = "Has perdido. ¡Prueba otra vez!😭";
  }
});
