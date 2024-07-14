let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

//for validation
function validateGuess(guess){
if(isNaN(guess)){
    alert('Please enter a valid number')
}
else if(guess < 1){
    alert ('Please enter a number more than 1 ')
}
else if(guess > 100){
    alert('Please enter a number less than 100')
}
else{
    prevGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game over.Random number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        guessCheck(guess)
    }
}
}

//for guesscheck
function guessCheck (guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if( guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

// for display the guess
function displayGuess (guess){
userInput.value = ''
guessSlot.innerHTML += `${guess} ,`
numGuess++
remaining.innerHTML = `${11 - numGuess}`
}

// for display message
function displayMessage (message){
loworHi.innerHTML = `<h2>${message}</h2>`
}

//for new game
function newGame(guess){
const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
 })
}

// for game over
function endGame(guess){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2 id ="newGame"> Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

