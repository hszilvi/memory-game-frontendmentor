
const numbersBtn = document.querySelector('.btn_numbers');
const iconsBtn = document.querySelector('btn_icons');

const playersNumber = document.querySelectorAll('.btn_player');

const gridSize = document.querySelectorAll('btn_grid');

const grid = document.querySelector('.game__board')

// array for numbers 1 to 18 
const numbersSmallArray = ['1', '2', '3', '4', '5', '6', '7', '8']
const numbersBigArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
// create grid
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];

// put numbers in random order
numbersSmallArray.sort(() => 0.5 - Math.random());
numbersBigArray.sort(() => 0.5 - Math.random());
console.log(numbersSmallArray);
console.log(numbersBigArray);

// create game board
function createSmallBoard() {
    for (let i = 0; i < numbersSmallArray.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('data-id', i);
        card.innerHTML = numbersSmallArray[i];
        card.className = 'card';
        grid.appendChild(card);
    }
}
createSmallBoard();