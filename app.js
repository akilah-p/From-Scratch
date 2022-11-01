/* Imports */

/* Get DOM Elements */
const ball1 = document.getElementById('ball-1');
const ball2 = document.getElementById('ball-2');
const ball3 = document.getElementById('ball-3');

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let total = 0;

function resetBalls () {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('remove');
}

function displayResults(){
    winsSpan.textContent = wins;
    totalSpan.textContent = total;
    lossesSpan.textContent = total - wins;
}

/* State */

/* Events */
button1.addEventListener('click', () => {
    total++;
    resetBalls();
    const ballLocation = Math.ceil(Math.random()* 3);
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }
    displayResults();
});

button2.addEventListener('click', () => {
    total++;
    resetBalls();
    const ballLocation = Math.ceil(Math.random()* 3);
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }
    displayResults();
});

button3.addEventListener('click', () => {
    total++;
    resetBalls();
    const ballLocation = Math.ceil(Math.random()* 3);
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }
    displayResults();
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
