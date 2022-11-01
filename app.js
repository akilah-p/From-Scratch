/* Imports */
const img1 = document.getElementById('img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');\

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');


const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let wins =0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    total++;
    resetShells();
    const ballLocation = Math.ceil(Math.random()* 3);
    if (ballLocation === 1) {
        wins++;
        img1.classList.add('reveal');
        
    } else if (ballLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    displayResults();
});

button2.addEventListener('click', () => {
    total++;
    resetShells();
    const ballLocation = Math.ceil(Math.random()* 3);
    if (ballLocation === 1) {
        wins++;
        img1.classList.add('reveal');
        
    } else if (ballLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    displayResults();
});

button3.addEventListener('click', () => {
    total++;
    resetShells();
    const ballLocation = Math.ceil(Math.random()* 3);
    if (ballLocation === 1) {
        wins++;
        img1.classList.add('reveal');
        
    } else if (ballLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    displayResults();
});

/* Display Functions */
function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    total.textContent = total;
}

function resetShells() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}

// (don't forget to call any display functions you want to run on page load!)
