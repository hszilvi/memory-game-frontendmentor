
const numbersBtn = document.querySelector('.btn_numbers');
const themeBtn = document.querySelectorAll('.btn_theme');
const iconsBtn = document.querySelector('.btn_icons');
const startGameBtn = document.querySelector('.start')
const playersNumber = document.querySelectorAll('.btn_player');

const gridSize = document.querySelectorAll('.btn_grid');

const grid = document.querySelector('.board')

// array for numbers 1 to 18 
const numbersSmallArray = ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8']
const numbersBigArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']

// options chosen
let themeChosen;
let playerChosen = [];
let gridChosen = [];
// create grid
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];

// put numbers in random order
numbersSmallArray.sort(() => 0.5 - Math.random());
numbersBigArray.sort(() => 0.5 - Math.random());

// function to check which theme button is clicked
const theme = document.getElementById('number-btn');
function checkTheme() {
    // let theme2 = document.getElementById('icon-btn');
    console.log(theme);
        if (JSON.stringify(theme) === 'number-btn') {
            console.log('its a number')
        themeChosen = 'Numbers';
    } else {
    
        themeChosen = 'Icons';
    }
};

for (let i = 0; i < themeBtn.length; i++) {


    themeBtn[i].addEventListener('click', () => {
        checkTheme();
        console.log('theme clicked')
    
        console.log(themeChosen);
    });
}


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
startGameBtn.addEventListener('click', () => {

    createSmallBoard();
})