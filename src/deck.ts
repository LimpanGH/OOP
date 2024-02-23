const SUITS = ['♠️', '♣️', '♥', '♦️'];
const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];
export default class Deck {
  constructor(cards) {
    this.cards = cards;
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

function freshDeck() {
  return SUITS.flatMap((suit) => {
    return values.map((value) => {
      return new Card(suit, value);
    });
  });
}
