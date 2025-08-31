
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessFeild')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numOfGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
  //compare value of guess if it is btw 1 to 100
  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if(guess < 1){
    alert("Please enter value between 1 and 100");
  } else if(guess > 100){
    alert("Please enter value between 1 and 100");
  } else {
    prevGuesses.push(guess);
    if(numOfGuesses === 11){
       displayGuess(guess);
       displayMessage(`Game Over, Random number was ${randomNumber}`)
       endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess)
    }
  }
}

function checkGuess(guess){
    //chech if value is highor low or equal to our random value
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numOfGuesses++;

   if((11 - numOfGuesses) < 0){
    remaining.innerHTML = `Chances of guessing are over`
   } else {
     remaining.innerHTML = `${11 - numOfGuesses}`
   }
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame" > Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
     randomNumber = parseInt(Math.random() * 100 + 1);
     prevGuesses = []
     numOfGuesses = 1;
     guessSlot.innerHTML = '';
     remaining.innerHTML = `${11 - numOfGuesses}`;
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
     displayMessage('')

     playGame = true;

  })
}

