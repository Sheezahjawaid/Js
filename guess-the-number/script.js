let random_num=parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess= [];
let numGuess= 1;

let playGame= true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess < 1){
        alert('please enter a  number more then 1');
    }else if(guess > 100){
        alert('please enter a number les then 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            clean_up_Guess(guess);
            displayMessage(`Game Over.Random number was ${random_num}`);
            endGame();
        }else{
            clean_up_Guess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random_num){
        displayMessage(`you guessed it right`);
        endGame();
    }else if(guess < random_num){
        displayMessage(`Your guess is TOO LOW!`);
    }else if(guess > random_num){
        displayMessage(`Your guess is TOO HIGH!`);
    }
}

function clean_up_Guess(guess){
    userInput.value='';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}


function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame= false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        random_num=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        remaining.innerHTML=`${10-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true
    })
}


