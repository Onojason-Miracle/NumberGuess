let randomNumber = Math.floor(Math.random() * 100) + 1;

const allGuesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkNumber() {
  const userGuess = Number(guessField.value);
  if (userGuess <= 0 || userGuess > 100) {
    lastResult.textContent = "Numbers should be between 1 and 100!";
    lastResult.style.backgroundColor = "#FFC107";
    lastResult.style.color = "black";
    lastResult.style.textAlign = "center";
    lastResult.style.borderRadius = "10px";
    lowOrHi.textContent = "";
  } else if (userGuess % 1 != 0) {
    lastResult.textContent = "Please provide a whole Number!";
    lastResult.style.backgroundColor = "#FFC107";
    lastResult.style.color = "black";
    lastResult.style.textAlign = "center";
    lastResult.style.borderRadius = "10px";
    lowOrHi.textContent = "";
  } else {
    checkGuess();
  }
}

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    allGuesses.textContent = "Previous guesses: ";
  }
  allGuesses.textContent += `${userGuess} `;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    lastResult.style.textAlign = "center";
    lastResult.style.borderRadius = "10px";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    lastResult.style.borderRadius = "10px";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "white";
    lastResult.style.color = "black";
    lastResult.style.textAlign = "center";
    lastResult.style.borderRadius = "10px";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkNumber);

function setGameOver() {
  const gamers = document.querySelector(".gamers-div");
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start New Game";
  gamers.appendChild(resetButton);
  resetButton.classList.add("resetButton");
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "#39289f";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
