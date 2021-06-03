const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';

let gameIsRunning = false;

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34)
    return ROCK;
  else if (randomValue < 0.67)
    return PAPER;
  else
    return SCISSORS;
};

const getPlayerChoice = () => {
  const playerChoice = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (playerChoice !== ROCK &&
    playerChoice !== PAPER &&
    playerChoice !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_PLAYER_CHOICE} for you!`);
    return DEFAULT_PLAYER_CHOICE;
  }
  return playerChoice;
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice ?
    RESULT_DRAW :
    cChoice === ROCK && pChoice === SCISSORS ||
    cChoice === PAPER && pChoice === ROCK ||
    cChoice === SCISSORS && pChoice === PAPER ?
      RESULT_COMPUTER_WINS :
      RESULT_PLAYER_WINS;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning)
    return;
  gameIsRunning = true;
  console.log('Game is starting...');
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});
