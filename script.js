const choices = ["rock", "paper", "scissor"];

const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector(".resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
let playerScore = 0;
let computerScore = 0;
let result = "";

function reset() {
  playerScore = 0;
  computerScore = 0;
  playerChoice = "";
  computerChoice = "";
  result = "";
  playerDisplay.textContent = `PLAYER : ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
  resultDisplay.textContent = result;
  resultDisplay.classList.remove("resultDisplay") ;
  playerScoreDisplay.textContent = `Player Score : ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score : ${computerScore}`;
}

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  if (playerChoice === computerChoice) {
    result = "It's a TIE!";
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    playerScore++;
    result = "YOU WIN!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    result = "YOU WIN!";
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    playerScore++;
    result = "YOU WIN!";
  } else if (computerChoice === "rock" && playerChoice === "scissor") {
    computerScore++;
    result = "YOU LOSE!";
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore++;
    result = "YOU LOSE!";
  } else if (computerChoice === "scissor" && playerChoice === "paper") {
    computerScore++;
    result = "YOU LOSE!";
  }
  resultDisplay.classList.add("resultDisplay") ;
  playerDisplay.textContent = `PLAYER : ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
  resultDisplay.textContent = result;
  if (result === "YOU WIN!") {
    resultDisplay.classList.add("greenText");
    resultDisplay.classList.remove("redText");
    resultDisplay.classList.remove("blackText");
  } else if (result === "YOU LOSE!") {
    resultDisplay.classList.add("redText");
    resultDisplay.classList.remove("greenText");
    resultDisplay.classList.remove("blackText");
  } else {
    resultDisplay.classList.add("blackText");
    resultDisplay.classList.remove("redText");
    resultDisplay.classList.remove("greenText");
  }
  playerScoreDisplay.textContent = `Player Score : ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score : ${computerScore}`;
}
