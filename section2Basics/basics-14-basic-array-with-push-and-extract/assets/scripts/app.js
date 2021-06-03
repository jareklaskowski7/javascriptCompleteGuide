const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  switch (operator) {
    case '+':
      currentResult += calcNumber;
      break;
    case '-':
      currentResult -= calcNumber;
      break;
    case '*':
      currentResult *= calcNumber;
      break;
    case '/':
      currentResult /= calcNumber;
      break;
    default:
      alert('There is an error in the switch statement!');
  }
  // from vendor file
  outputResult(calcDescription, currentResult);
  logEntries.push(calcNumber);
  console.log(logEntries);
  //console.log(logEntries[0]);
  //console.log(logEntries[1]);
}

function add() {
  createAndWriteOutput(currentResult, '+', getUserNumberInput());
}

function subtract() {
  createAndWriteOutput(currentResult, '-', getUserNumberInput());
}

function multiply() {
  createAndWriteOutput(currentResult, '*', getUserNumberInput());
}

function divide() {
  createAndWriteOutput(currentResult, '/', getUserNumberInput());
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
