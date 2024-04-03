
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
// array for characters 
const iconsSmallArray = [];
const iconsBigArray = [];

// options chosen
let themeChosen;
let playerChosen;
let gridChosen;
// create grid
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];

// put numbers in random order
numbersSmallArray.sort(() => 0.5 - Math.random());
numbersBigArray.sort(() => 0.5 - Math.random());

// function to check which theme button is clicked
const theme = document.getElementById('number-btn');
const theme2 = document.getElementById('icon-btn');
function checkTheme() {
        if (theme.classList.contains('clicked')) {
            console.log('its a number')
        themeChosen = 'Numbers';
    } else if (theme2.classList.contains('clicked')) {   
        themeChosen = 'Icons';
    }
};

themeBtn.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        // themeBtn.forEach(btn => {
        //     if (btn !== button) {
        //         btn.classList.remove('clicked');
        //     }
        // });
        checkTheme();
        console.log(themeChosen);
    });
});
// check how many players
const onePlayer = document.getElementById('player1');
const twoPlayer = document.getElementById('player2');
const threePlayer = document.getElementById('player3');
const fourPlayer = document.getElementById('player4');

function checkPlayers() {
    if (onePlayer.classList.contains('clicked')) {
        playerChosen = 1;

    } else if (twoPlayer.classList.contains('clicked')) {
        playerChosen = 2;
    } else if (threePlayer.classList.contains('clicked')) {
        playerChosen = 3;
    } else if (fourPlayer.classList.contains('clicked')) {
        playerChosen = 4;
    }
console.log(playerChosen)
}

playersNumber.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        // playersNumber.forEach(btn => {
        //     if (btn !== button) {
        //         btn.classList.remove('clicked');
        //     }
        // });
        checkPlayers();
    });
});
// check grid size
const smallGrid = document.getElementById('grid4');
const bigGrid = document.getElementById('grid6');

function checkGridSize() {
    if (smallGrid.classList.contains('clicked')) {
        gridChosen = 'small';
    } else if (bigGrid.classList.contains('clicked')) {
        gridChosen = 'big';
    };
    console.log(gridChosen);
}
gridSize.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        // gridSize.forEach(btn => {
        //     if (btn !== button) {

        //         btn.classList.remove('clicked');
        //     }
        // });
        checkGridSize();
    });
});
// create players card
const playersToDisplay = document.querySelector('.multiple-player-board');
function createPlayersCards() {
    if (playerChosen === 1) {
        document.querySelector('.single-player-board').style.display = "block";
    } else {
        let numberOfCards = playerChosen;
        for (let i = 0; i < numberOfCards; i++) {
            const el = document.createElement('div');
            el.className = "player-box";
            el.innerHTML =
            `
            <p>Player ${i+1}</p>
            <div class="scores">5</div>
            `
            playersToDisplay.appendChild(el);
            console.log(el);
        };



    }
    // console.log(el);
}


// create game board
function createSmallBoard() {
    for (let i = 0; i < numbersSmallArray.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('data-id', i);
        card.innerHTML = numbersSmallArray[i];
        card.className = 'card';
        grid.appendChild(card);
    };
};
function createBigBoard() {
    for (let i= 0; i < numbersBigArray.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('data-id', i);
        card.innerHTML = numbersBigArray[i];
        card.className = 'card';
        grid.appendChild(card);
    };
};
function createBoard() {
    if (gridChosen === 'small') {
        createSmallBoard();
    } else if (gridChosen === 'big') {
        createBigBoard();
    } else {
        console.log('no grid size chosen')
    };
};

// start game button
startGameBtn.addEventListener('click', () => {
    createPlayersCards();
    createBoard();
});