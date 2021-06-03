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
    return;
  }
  return playerChoice;
};

const getWinner = (
  cChoice,
  pChoice = DEFAULT_PLAYER_CHOICE
) =>
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
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice)
    winner = getWinner(computerChoice, playerChoice);
  else
    winner = getWinner(computerChoice);

  let message = `You picked ${playerChoice || DEFAULT_PLAYER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_COMPUTER_WINS)
    message += 'lost.';
  else if (winner === RESULT_PLAYER_WINS)
    message += 'won.';
  else
    message += 'had a draw.';
  alert(message);
  gameIsRunning = false;
});
