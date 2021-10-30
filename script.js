'use strict';

let randomNumber;
let limitBefore;
let score = Number(document.querySelector('.score').innerHTML);

window.addEventListener('load', resetAll);
document.querySelector('.again').addEventListener('click', resetAll);

function generateRandomNumber() {
    randomNumber = Math.trunc(((Math.random())*20)+limitBefore);
}

function resetAll() {
    document.querySelector('.message').innerHTML = 'Start guessing...😁';
    document.querySelector('.score').innerHTML = 20;
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').disabled = false;
    document.querySelector('body').style.backgroundColor = 'black';
    limitBefore = Math.trunc(((Math.random())*40)+1);
    document.querySelector('.limitbefore').innerHTML = limitBefore;
    document.querySelector('.limitafter').innerHTML = limitBefore+20;
    generateRandomNumber();
}

document.querySelector('.check').addEventListener('click', checkForValidation);

function checkForValidation() {
    const guessedNumber = Number(document.querySelector('.guess').value);
    if(guessedNumber === randomNumber) {
        document.querySelector('.message').innerHTML = 'You guessed it right🥳.';
        guessedCorrect();
    } else if(guessedNumber > randomNumber) {
        document.querySelector('.message').innerHTML = 'Choose a smaller one.🥴';
        guessedWrong();
    } else if(guessedNumber < randomNumber) {
        document.querySelector('.message').innerHTML = 'Choose a greater one.🥴';
        guessedWrong();
    }
}

function guessedCorrect() {
    document.querySelector('body').style.backgroundColor = 'green';
    const highScore = Number(document.querySelector('.highscore').innerHTML);
    if(highScore < score) {
        document.querySelector('.highscore').innerHTML = score;
    }
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
}

function guessedWrong() {
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = 'black';
    }, 200);
    score -= 1;
    if(score < 0) {
        alert("Improve your skills.🥱");
        resetAll();
    }
    document.querySelector('.score').innerHTML = score;
}