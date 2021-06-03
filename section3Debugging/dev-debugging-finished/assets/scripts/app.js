const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, calcNumber) {
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
  const calcDesc = `${initialResult} ${operator} ${calcNumber}`;
  // from vendor file
  outputResult(calcDesc, currentResult);
  writeToLog(operationDesc, initialResult, calcNumber);
}

function writeToLog(operationDesc, initialResult, calcNumber) {
  const logEntry = {
    operation: operationDesc,
    previousResult: initialResult,
    enteredNumber: calcNumber,
    result: currentResult
  };

  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function add() {
  createAndWriteOutput('+', getUserNumberInput());
}

function subtract() {
  createAndWriteOutput('-', getUserNumberInput());
}

function multiply() {
  createAndWriteOutput('*', getUserNumberInput());
}

function divide() {
  createAndWriteOutput('/', getUserNumberInput());
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
