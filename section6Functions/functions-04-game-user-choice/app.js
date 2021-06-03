const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';

let gameIsRunning = false;

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34)
    return ROCK;
  else if (randomValue < 0.67)
    return PAPER;
  else
    return SCISSORS;
};

const getPlayerChoice = function () {
  const playerChoice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    playerChoice !== ROCK &&
    playerChoice !== PAPER &&
    playerChoice !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_PLAYER_CHOICE} for you!`);
    return DEFAULT_PLAYER_CHOICE;
  }
  return playerChoice;
};

const getWinner = function (cChoice, pChoice) {
  if (
    cChoice === ROCK && pChoice === SCISSORS ||
    cChoice === PAPER && pChoice === ROCK ||
    cChoice === SCISSORS && pChoice === PAPER
  ) {
    return RESULT_COMPUTER_WINS;
  } else if (
    pChoice === ROCK && cChoice === SCISSORS ||
    pChoice === PAPER && cChoice === ROCK ||
    pChoice === SCISSORS && cChoice === PAPER
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_DRAW;
  }
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning)
    return;
  gameIsRunning = true;
  console.log('Game is starting...');
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});
