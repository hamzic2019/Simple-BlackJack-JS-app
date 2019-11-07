//
// Haris Hamzić
// BlackJack Web Based Game
// 07.11.2019
//

// DOM Variables
let newGame = document.getElementById('newGame');

// Variables
let deck = [];

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = [
    {value: 'Ace', score: 1},  {value: 'King', score: 13}, {value: 'Queen', score: 12}, {value: 'Jack', score: 11},
    {value: 'Ten', score: 10}, {value: 'Nine', score: 9},  {value: 'Eight', score: 8},  {value: 'Seven', score: 7},
    {value: 'Six', score: 6},  {value: 'Five', score: 5},  {value: 'Four', score: 4},   {value: 'Three', score: 3},
    {value: 'Two', score: 2} 
];


function createDeck(){
    let deck = [];

    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++){
            deck.push({
                suit: suits[i],
                value: values[j]
            })
        }
    }
    deck = shuffleDeck(deck);
    return deck;
}

function shuffleDeck(a){
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


newGame.addEventListener('click', event => {
    deck = createDeck();
    console.log(deck);
});

hit.addEventListener('click', event => {
    let text = deck.shift();
        text = `${text.value.value} of ${text.suit} - ${text.value.score}`;

    console.log(text);
});

stay.addEventListener('click', event => {
    console.log(deck);
});


