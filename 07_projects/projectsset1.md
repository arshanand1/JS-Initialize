# Projects related to markdown

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 solution

```javascript
console.log("arsh")
const buttons = document.querySelectorAll('.button');
document.querySelector('body');
// console.log(buttons);

// buttons ek node list hai toh nodelist ke saath mai forEach laga sakta hun

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'blue'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'white'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'yellow'){
      document.body.style.background = e.target.id;
    }
    if(e.target.id === 'purple'){
      document.body.style.background = e.target.id;
    }
  });
});

```

## Project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty height
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid ${weight}`;
  }
  else{
    const bmi = (weight/(height*height/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3 solution

```javascript
const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock');
//console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());
}, 1000);
```



## Project 4 Solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a valid number ')
    }
    else if(guess > 100){
        alert('Please enter a valid number ')
    }
    else{
        prevGuess.push(guess);
        if (numGuess === 11 ){
            dispalyGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            dispalyGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too high`)
    }
}

function dispalyGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess=[];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
```