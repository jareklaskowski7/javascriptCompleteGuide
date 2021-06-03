const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
console.log('randomNumber => ', randomNumber);
if (randomNumber > 0.7) {
  alert('The random number is greater than 0.7');
}

numbers = [2, 8, 3, 4, 1];

console.log('First iteration:');
for (let idx = 0; idx < numbers.length; idx++) {
  console.log(numbers[idx]);
}

console.log('Second iteration:');
for (element of numbers) {
  console.log(element);
}

console.log('Third iteration:');
for (let idx = numbers.length - 1; idx >= 0; idx--) {
  console.log(numbers[idx]);
}

const anotherRandomNumber = Math.random();
console.log('anotherRandomNumber => ', anotherRandomNumber);
if (randomNumber > 0.7 && anotherRandomNumber > 0.7 ||
  randomNumber <= 0.2 ||
  anotherRandomNumber <= 0.2) {
  alert('Both random numbers are greater than 0.7 or at least one of the random numbers is not greater than 0.2');
}
