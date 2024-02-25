
// // Define an array of suits
// const SUITS: string[] = ['♠️', '♣️', '♥️', '♦️'];

// // Define values for cards
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

// // Define a Card class
// class Card {
//   suit: string;
//   value: string;

//   constructor(suit: string, value: string) {
//     this.suit = suit;
//     this.value = value;
//   }

//   // Getter for numeric value of card
//   get numericValue(): number {
//     return values[this.value];
//   }
// }

// // Function to create a fresh deck of cards
// function freshDeck(): Card[] {
//   const cards: Card[] = [];
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


// // Create a Deck class
// class Deck {
//   cards: Card[];

//   constructor() {
//     this.cards = freshDeck();
//   }

//   // Method to shuffle the deck
//   shuffle(): void {
//     for (let i = this.cards.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
//     }
//   }

//   // Method to deal a hand of cards
//   dealHand(numCards: number): Card[] {
//     return this.cards.splice(0, numCards);
//   }

//   // Method to add cards to the deck
//   addToDeck(cards: Card[]): void {
//     this.cards.push(...cards);
//   }

//   // Method to print the full deck
//   printFullDeck(): void {
//     console.log('Full Deck (Shuffled):', this.cards);
//   }
// }

// // Create a Player class
// class Player {
//   name: string;
//   hand: Card[];

//   constructor(name: string) {
//     this.name = name;
//     this.hand = [];
//   }

//   // Method to receive a card
//   receiveCard(card: Card): void {
//     this.hand.push(card);
//   }

//   // Method to calculate the total value of the hand
//   calculateHandValue(): number {
//     return this.hand.reduce((total, card) => total + card.numericValue, 0);
//   }

//   // Method to discard cards from the hand
//   discard(indexes: number[]): Card[] {
//     const discardedCards: Card[] = [];
//     indexes.sort((a, b) => b - a);
//     indexes.forEach((index) => {
//       discardedCards.push(this.hand.splice(index, 1)[0]);
//     });
//     return discardedCards;
//   }
// }

// // Instantiate a new deck, shuffle it, and print it
// const deck = new Deck();
// deck.shuffle();
// deck.printFullDeck();

// // Create two players
// const slim = new Player('Slim');
// const luke = new Player('Luke');

// // Deal hands to players
// slim.hand = deck.dealHand(5);
// luke.hand = deck.dealHand(5);

// // Display initial hands and values
// console.log('Initial Deck:', deck.cards.length, 'cards remaining');
// console.log("Initial Slim's hand:", slim.hand);
// console.log("Initial Luke's hand:", luke.hand);
// console.log("Slim's initial hand value:", slim.calculateHandValue());
// console.log("Luke's initial hand value:", luke.calculateHandValue());

// // Players discard some cards
// const slimDiscardedCards = slim.discard([0, 1]);
// const lukeDiscardedCards = luke.discard([0, 1]);

// // Add discarded cards back to the deck
// deck.addToDeck([...slimDiscardedCards, ...lukeDiscardedCards]);

// // Players draw new cards
// slim.hand.push(...deck.dealHand(2));
// luke.hand.push(...deck.dealHand(2));

// // Display updated deck and hands
// console.log(
//   'Deck after players discard and draw:',
//   deck.cards.length,
//   'cards remaining'
// );
// console.log("Slim's hand after discard and draw:", slim.hand);
// console.log("Luke's hand after discard and draw:", luke.hand);
// console.log(
//   "Slim's hand value after discard and draw:",
//   slim.calculateHandValue()
// );
// console.log(
//   "Luke's hand value after discard and draw:",
//   luke.calculateHandValue()
// );

// // Function to discard all cards from a player
// function discardAll(player: Player): void {
//   console.log(`${player.name} discards all cards.`);
//   player.hand = [];
// }

// // Function to move all cards from players' hands to the deck
// function moveAllToDeck(player1: Player, player2: Player, deck: Deck): void {
//   console.log(`Moving all cards from players' hands to the deck...`);
//   deck.addToDeck(player1.hand);
//   deck.addToDeck(player2.hand);
//   player1.hand = [];
//   player2.hand = [];
// }

// // Function to shuffle the deck and print it
// function shuffleAndPrint(deck: Deck): void {
//   deck.shuffle();
//   console.log('Deck shuffled and printed:', deck.cards);
// }

// // Discard all cards from players
// discardAll(slim);
// discardAll(luke);

// // Move all cards from players' hands to the deck
// moveAllToDeck(slim, luke, deck);

// // Display updated deck and hands
// console.log(
//   'Deck after moving all cards:',
//   deck.cards.length,
//   'cards remaining'
// );
// console.log("Slim's hand after moving cards to deck:", slim.hand);
// console.log("Luke's hand after moving cards to deck:", luke.hand);

// // Shuffle the deck and display it
// shuffleAndPrint(deck);

// // Function to create a paragraph element with given text
// function createParagraph(text: string): HTMLParagraphElement {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = text;
//   return paragraph;
// }

// // Function to display the deck
// function displayDeck(deck: Deck): void {
//   const deckContainer = document.getElementById('deck-container');
//   if (!deckContainer) return;

//   deckContainer.innerHTML = '';

//   const paragraph = createParagraph(
//     `Deck (${deck.cards.length} cards remaining):`
//   );
//   deckContainer.appendChild(paragraph);

//   deck.cards.forEach((card, index) => {
//     const cardInfo = `${card.value} of ${card.suit}`;
//     const cardParagraph = createParagraph(`${index + 1}. ${cardInfo}`);
//     deckContainer.appendChild(cardParagraph);
//   });
// }

// // Function to display a player's hand
// function displayPlayerHand(player: Player): void {
//   const playerContainer = document.getElementById(
//     `${player.name.toLowerCase()}-hand-container`
//   );
//   if (!playerContainer) return;

//   playerContainer.innerHTML = '';

//   const paragraph = createParagraph(
//     `${player.name}'s hand (${player.hand.length} cards):`
//   );
//   playerContainer.appendChild(paragraph);

//   player.hand.forEach((card, index) => {
//     const cardInfo = `${card.value} of ${card.suit}`;
//     const cardParagraph = createParagraph(`${index + 1}. ${cardInfo}`);
//     playerContainer.appendChild(cardParagraph);
//   });
// }

// // Function to display the initial setup (deck and hands)
// function displayInitialSetup(deck: Deck, slim: Player, luke: Player): void {
//   displayDeck(deck);
//   displayPlayerHand(slim);
//   displayPlayerHand(luke);
// }

// // Display the initial setup
// displayInitialSetup(deck, slim, luke);

// // Discard last drawn cards from players
// slimDiscardedCards.forEach((_) => slim.hand.pop());
// lukeDiscardedCards.forEach((_) => luke.hand.pop());

// // Draw new cards for players
// slim.hand.push(...deck.dealHand(2));
// luke.hand.push(...deck.dealHand(2));

// // Display updated hands and deck
// displayPlayerHand(slim);
// displayPlayerHand(luke);
// displayDeck(deck);
