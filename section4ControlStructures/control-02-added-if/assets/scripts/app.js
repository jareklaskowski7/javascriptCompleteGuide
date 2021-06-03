const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  // !enteredNumber - zero is falsy
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    mathOperator = '+';
    currentResult += enteredNumber;
  } else if (calculationType === 'SUBTRACT') {
    mathOperator = '-';
    currentResult -= enteredNumber;
  } else if (calculationType === 'MULTIPLY') {
    mathOperator = '*';
    currentResult *= enteredNumber;
  } else if (calculationType === 'DIVIDE') {
    mathOperator = '/';
    currentResult /= enteredNumber;
  }

  createAndWriteOutput(initialResult, mathOperator, enteredNumber);
  writeToLog(initialResult, calculationType, enteredNumber);
}

// Generates and writes calculation log
function createAndWriteOutput(initialResult, mathOperator, enteredNumber) {
  const calcDesc = `${initialResult} ${mathOperator} ${enteredNumber}`;
  // from vendor file
  outputResult(calcDesc, currentResult);
}

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function writeToLog(initialResult, calculationType, enteredNumber) {
  const logEntry = {
    initialResult: initialResult,
    calculationType: calculationType,
    enteredNumber: enteredNumber,
    currentResult: currentResult
  };

  logEntries.push(logEntry);
  //console.log(logEntry.operation);
  console.log(logEntry.calculationType);
  console.log(logEntries);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
