'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessage(className, message) {
    document.querySelector(className).textContent = message;
}

// When player clicks "Check!" button
document.querySelector('.btn.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
        displayMessage('.message', '⛔ No number!');
    }
    // When player wins
    else if (guess === secretNumber) {
        displayMessage('.message', '🎉 Correct Number!');
        displayMessage('.number', secretNumber);
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        // Check highscore
        if (score > highscore) {
            highscore = score;
            displayMessage('.highscore', highscore);
        }
    }
    // When guess is wrong
    else if (score > 1) {
        score--;
        displayMessage('.score', score);
        displayMessage('.message', guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
        displayMessage('.message', '💥 You lost the game!');
        displayMessage('.number', secretNumber);
        displayMessage('.score', 0);
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#FE6363';
    }
});

// When player clicks "Again!" button
document.querySelector('.btn.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('.message', 'Start guessing...');
    displayMessage('.score', score);
    displayMessage('.number', '?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = '';
});