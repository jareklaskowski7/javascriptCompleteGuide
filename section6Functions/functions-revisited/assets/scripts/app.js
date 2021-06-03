const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function calculate(operation) {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  let operator;
  switch (operation) {
    case 'ADD':
      operator = '+';
      currentResult += enteredNumber;
      break;
    case 'SUBTRACT':
      operator = '-';
      currentResult -= enteredNumber;
      break;
    case 'MULTIPLY':
      operator = '*';
      currentResult *= enteredNumber;
      break;
    case 'DIVIDE':
      operator = '/';
      currentResult /= enteredNumber;
      break;
    default:
      alert('This operation is nonexistent!');
  }
  createAndWriteOutput(initialResult, operator, enteredNumber);
  writeToLog(initialResult, operation, enteredNumber);
}

function createAndWriteOutput(initialResult, operator, enteredNumber) {
  const calcDesc = `${initialResult} ${operator} ${enteredNumber}`;
  outputResult(calcDesc, currentResult);
}

function writeToLog(initialResult, operation, enteredNumber) {
  const logEntry = {
    initialResult: initialResult,
    operation: operation,
    enteredNumber: enteredNumber,
    currentResult: currentResult
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
