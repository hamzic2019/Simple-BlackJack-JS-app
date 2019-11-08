//
// Haris Hamzić
// BlackJack Web Based Game
// 07.11.2019
//

// DOM Variables
let newGame = document.getElementById('newGame');

// Variables
let deck = [];
let userScore = 0;
let dealerScore = 0;
let userDeck = [];
let dealerDeck = [];

// Card Variables
let card0 = document.getElementById('card0');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');

card0.style.display = 'none';
card1.style.display = 'none';
card2.style.display = 'none';
card3.style.display = 'none';
card4.style.display = 'none';
card5.style.display = 'none';
card6.style.display = 'none';
card7.style.display = 'none';

let hit = document.getElementById('hit');
let stay = document.getElementById('stay');

    hit.style.display = 'none';
    stay.style.display = 'none';


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
    userDeck = [];
    hit.style.display = 'inline-block';
    stay.style.display = 'inline-block';

    card0.style.display = 'none';
    card1.style.display = 'none';
    card2.style.display = 'none';
    card3.style.display = 'none';
    card4.style.display = 'none';
    card5.style.display = 'none';
    card6.style.display = 'none';
    card7.style.display = 'none';
});

hit.addEventListener('click', event => {
    let text = deck.shift();
    let karta = `${text.value.score}${text.suit.charAt(0)}`;
        text = `${text.value.value} of ${text.suit} - ${text.value.score}`;

        userDeck.push(karta);


        userDeck.forEach((a, x) => {
            
            let kartica = `card${x}`;
            
            switch(x){
                case 0: 
                card0.style.display = 'inline-block';
                break;
                case 1: 
                card1.style.display = 'inline-block';
                break;
                case 2: 
                card2.style.display = 'inline-block';
                break;
                case 3: 
                card3.style.display = 'inline-block';
                break;
                case 4: 
                card4.style.display = 'inline-block';
                break;
                case 5: 
                card5.style.display = 'inline-block';
                break;
                case 6: 
                card6.style.display = 'inline-block';
                break;
                case 7: 
                card7.style.display = 'inline-block';
                break;
            }

            
            document.getElementById(kartica).src = `./img/cards/${a}.png`; 
 
        });
        



    console.log(text);
});

stay.addEventListener('click', event => {
    console.log(deck);
});


