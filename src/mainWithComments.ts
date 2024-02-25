// TODO: Add more comments for future ref.

// // Define an array of suits, setting the variables type to an array of strings
// const SUITS: string[] = ['♠️', '♣️', '♥️', '♦️'];

// //Define values for the cards, setting the type of the key to be a string and the key-value to be a number.
// const values: { [key: string]: number } = {
//   A: 1,
//   '2': 2,
//   '3': 3,
//   '4': 4,
//   '5': 5,
//   '6': 6,
//   '7': 7,
//   '8': 8,
//   '9': 9,
//   '10': 10,
//   J: 11,
//   Q: 12,
//   K: 13,
// };

// // ------------------------------------

// // Defining a Card class with two parameters and their types
// class Card {
//   suit: string;
//   value: string;

//   // Using the constructor method on my Card-class for creating and initializing an instance of that class. Passing suit and value as arguments.
//   constructor(suit: string, value: string) {
//     // The this keyword refers to the current instance of the Card object being created.
//     this.suit = suit;
//     this.value = value;
//   }

//   // Here I use the get-method, arbiitrarily naming it "numericValue". I retrieve the numerical equivalent of the card's face value, which is stored in the value property.
//   get numericValue(): number {
//     // Returning the value of the this.value from newly constructed instances
//     return values[this.value];
//   }
// }
// // ------------------------------------
// function freshDeck(): Card[] {
//   const cards: Card[] = []; // Initializing an empty array named cards to store the cards in the deck.

//   // Looping through the SUITS-array and the array in the values-object.
//   // The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property.
//   // The call() method of Function instances calls this function with a given this-value and arguments provided individually.
//   // Basically it creates a deck of cards by iterating over each Suit and each value, and for each combination of suit and value, it creates a new Card instance and adds it to the cards array.
//   for (const suit of SUITS) {
//     for (const value in values) {
//       if (Object.prototype.hasOwnProperty.call(values, value)) {
//         cards.push(new Card(suit, value));
//       }
//     }
//   }
//   return cards;
// }

// console.log('Full Deck (unshuffled):', freshDeck());
// // ------------------------------------

// // *      Highlight
// // TODO:  Orange text
// // !      Red text
// // ?      Blue text
