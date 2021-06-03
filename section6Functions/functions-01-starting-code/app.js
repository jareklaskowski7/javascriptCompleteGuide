const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

//startGame();

/*
const person = {
  name: 'Max',
  greet: function greet() {
    console.log('Hello here!');
  }
};
 */

//person.greet();
//console.log(typeof startGame);
console.dir(startGame);

startGameBtn.addEventListener('click', startGame);
