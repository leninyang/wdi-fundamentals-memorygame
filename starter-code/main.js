console.log("JS file is connected to HTML! Woo!")
// var cardOne = "queen"
// var cardTwo = "queen"
// var cardThree = "king"
// var cardFour = "king"

// represents the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

// represents the cards in play
var cardsInPlay = [];

// if (cardOne === cardTwo) {
// 	alert('You found a match!')
// } else if (cardThree === cardFour) {
// 	alert('You found a match!')
// } else if (cardOne !== cardThree) {
// 	alert('Sorry, try again.')
// } else if (cardOne !== cardFour) {
// 	alert('Sorry, try again.')
// } else if (cardTwo !== cardThree) {
// 	alert('Sorry, try again.')
// } else if (cardTwo !== cardFour) {
// 	alert('Sorry, try again.')
// }

//Get an element with the id of game-board and set it to a variable.
//so that we can add cards to it.
var gameBoard = document.getElementById('game-board');
//function that will create your cards
function createCards() {
    // loop through your cards array to create card elements for your board
    for (var i = 0; i < cards.length; i++) {
      //create div element which will be used as a card
      var cardElement = document.createElement('div');
      //add class to the card element which will help link styling
      cardElement.className = 'card';
      // this will set the card's 'data-card' to be the element of the array
      // data- attributes are meant to store data about an element that is not tied to a style.
      // i.e. "king"
      cardElement.setAttribute('data-card', cards[i]);
      // when a card is clicked the function isTwoCards will be executed
      cardElement.addEventListener('click', isTwoCards);

      //append card to the board
      gameBoard.appendChild(cardElement);
      
    }
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

function isTwoCards() {
	// add card to array of cards in play
  	// 'this' hasn't been covered in this pre-work, but
  	// for now, just know it gives you access to the card the user clicked on
  	cardsInPlay.push(this.getAttribute('data-card'));
  	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img class='faceUpCard' src='king-28252_1280.png'/>"; // king
	} else {
		this.innerHTML = "<img class='faceUpCard' src='queen-28253_1280.png'/>"; //queen
	}
  	// if you have two cards in play, check for a match
 	if (cardsInPlay.length === 2) {
 	// pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for your next try
    cardsInPlay = [];
	}
}


createCards();
