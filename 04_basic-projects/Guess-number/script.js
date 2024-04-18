const randomNumber = parseInt(Math.random() * 100 +1)

const submitButton = document.querySelector('subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

const prevGuess = []
const numGuess = 1
const playGame = true


if (playGame) {
    submitButton.addEventListener('click', function (event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if (guess<1) {
        alert('Please enter a number more than 1')
    } else if (guess >100) {
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if (numGuess===11) {
            displayGuess()
            displayMessage(`Game Over . random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //
    if (guess===randomNumber) {
        displayMessage(`You've guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage("Number is too low")
    } else if (guess > randomNumber) {
        displayMessage("Number is too high")
    }
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess) {
    userInput.value = ' '
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
    
}

function newGame() {
    
}
function endGame() {
    userInput = " "
    userInput.setAttribute('disabled' , " ")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}