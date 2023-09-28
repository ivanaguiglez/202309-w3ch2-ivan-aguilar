const suits = ["hearts", "diamonds", "pikes", "clovers"];
const cardValue = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const cardNumeration = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13,
];

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

const getValueComparation = (hiddenCard, shownCard) => {
  if (hiddenCard.cardValue === shownCard.cardvalue) {
    return "Son iguales";
  } else if (hiddenCard.cardValue < shownCard.cardValue) {
    return "Tu carta es mayor";
  } else {
    return "Tu carta es menor";
  }
};
