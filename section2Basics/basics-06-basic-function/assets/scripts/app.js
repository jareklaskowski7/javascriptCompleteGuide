const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

function add(num1, num2) {
  const result = num1 + num2;
  alert('The result is ' + result);
}

currentResult = (currentResult + 10) * 3 / 2 - 1;
outputResult(calculationDescription, currentResult);

add(1, 2);
add(5, 5);
