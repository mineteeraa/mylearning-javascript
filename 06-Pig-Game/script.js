'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Declare global variables
let scores, currentScore, acticePlayer, isPlaying;

function init() {
    scores = [0, 0]
    currentScore = 0;
    acticePlayer = 0;
    isPlaying = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${acticePlayer}`).textContent = 0;
    acticePlayer = acticePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Setup initial values for starting game
init();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (isPlaying) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;
        // Check for rolled 1
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${acticePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Keeping the current score to the total score
btnHold.addEventListener('click', function () {
    if (isPlaying) {
        scores[acticePlayer] += currentScore;
        document.getElementById(`score--${acticePlayer}`).textContent = scores[acticePlayer];
        // When keeping the current score, it will check the total score of active players for the winner
        if (scores[acticePlayer] >= 100) {
            isPlaying = false;
            document.querySelector(`.player--${acticePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${acticePlayer}`).classList.add('player--winner');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});

// Playing the new game
btnNew.addEventListener('click', function () {
    init();
});