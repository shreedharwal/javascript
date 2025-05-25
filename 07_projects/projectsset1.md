# Projects related to DOM

## project link
[Click here!!] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution Code

## Project 1 Solution

```JavaScript

console.log("Hello To Projects")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'lavender') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```


## Project 2 Solution

```JavaScript 

const form = document.querySelector('form');

// this usecase will give empty value
// const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3 Solution

```JavaScript

const clock = document.getElementById('clock');
// document.queryselectro('#clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 Solution

```JavaScript

let randno = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinp = document.querySelector('#guessField');
const guessslots = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinp.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number more than 1 ');
  } else if (guess > 100) {
    alert('Please enter a valid number less than 100 ');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displaymsg(`Game Over. Random number was ${randno}`);
      endgame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randno) {
    displaymsg(`You guessed it right`);
    endgame();
  } else if (guess < randno) {
    displaymsg(`Number is too low`);
  } else if (guess > randno) {
    displaymsg(`Number is too high`);
  }
}

function displayGuess(guess) {
  userinp.value = '';
  guessslots.innerHTML += `${guess}  `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymsg(msg) {
  loworHi.innerHTML = `<h2>${msg}</h2>`;
}

function endgame() {
  userinp.value = '';
  userinp.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newgame'> Start new game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newGame();
}

function newGame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randno = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessslots.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinp.removeAttribute('disabled');
    startOver.removeChild(p);
    playgame = true;
  });
}

```