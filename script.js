'use strict';
let numberEl = document.querySelector('.number')
let messageEl = document.querySelector('.message')
let scoreEl = document.querySelector('.score')
let highScoreEl = document.querySelector('.highscore')

let highScore = 0;
let score = 20

function displayMessage(mess) {
    messageEl.textContent = mess;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        messageEl.textContent = "🚫 No Number, please add Number !!"
    } else if (guess === secretNumber) {
        displayMessage("You Win !!💥")
        numberEl.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            highScoreEl.textContent = score;
        }
    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? messageEl.textContent = "To Low" : messageEl.textContent = "To High")
            score--;
            scoreEl.textContent = score;

        } else {
            displayMessage("You Lost")
            scoreEl.textContent = 0;
        }
    }

})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    numberEl.textContent = '?'
    scoreEl.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    messageEl.textContent = "Start guessing...";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
