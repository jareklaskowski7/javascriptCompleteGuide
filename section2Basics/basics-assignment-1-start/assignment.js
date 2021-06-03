const inputNumber = document.getElementById('input-number');
const outputNumber = document.getElementById('output-number');

function displayNumbers(input, output) {
  inputNumber.textContent = input;
  outputNumber.textContent = output;
}

const userNumber = 7;
let result;
result = 18 + userNumber;
result -= 7;
result *= 3;
result /= 5;
displayNumbers(userNumber, result);
alert(`User entered ${userNumber} and the result is ${result}.`);
