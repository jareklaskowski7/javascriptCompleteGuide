const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
  const calcDesc = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  let operationDesc;
  const initialResult = currentResult;

  switch (operator) {
    case '+':
      operationDesc = 'ADD';
      currentResult += calcNumber;
      break;
    case '-':
      operationDesc = 'SUBTRACT';
      currentResult -= calcNumber;
      break;
    case '*':
      operationDesc = 'MULTIPLY';
      currentResult *= calcNumber;
      break;
    case '/':
      operationDesc = 'DIVIDE';
      currentResult /= calcNumber;
      break;
    default:
      alert('There is an error in the switch statement!');
  }
  // from vendor file
  outputResult(calcDesc, currentResult);

  const logEntry = {
    operation: operationDesc,
    previousResult: initialResult,
    number: calcNumber,
    result: currentResult
  };

  logEntries.push(logEntry);
  console.log(logEntries);
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
