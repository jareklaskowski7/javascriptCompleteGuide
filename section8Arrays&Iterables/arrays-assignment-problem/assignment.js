const numbers = [];
for (let idx = 0; idx < 10; idx++)
  numbers[idx] = idx + 1;

const numbersMoreThanFive = numbers.filter(num => num > 5);
console.log(numbersMoreThanFive);

const multiplier = 7;

const multipleNumbers = numbers.map((num, idx) => {
  const numberObj = {index: idx, multipleNumber: num * multiplier};
  return numberObj;
});
console.log(numbers, multipleNumbers);

const multipleNumbers2 = numbers.map(num => {
  return {number: num, multipleNumber: num * multiplier};
});
console.log(numbers, multipleNumbers2);

const multipleNumbers3 = numbers.map(num => num * multiplier);
console.log(numbers, multipleNumbers3);

const multiplicationNumbers = numbers.reduce((prevValue, curValue) => prevValue * curValue, 1);
console.log(multiplicationNumbers);

const firstNumbers = numbers.filter(num => num < 3);
const secondNumbers = numbers.filter(num => num > 2 && num < 6);
const thirdNumbers = numbers.filter(num => num > 5 && num < 9);
const forthNumbers = numbers.filter(num => num > 8);
console.log(firstNumbers, secondNumbers, thirdNumbers, forthNumbers);

const findMax = (...arrs) => {
  let maxNumbers = [];
  arrs.forEach(arr => {
    //console.log('iterating over arrays:');
    //console.log('array', array);
    arr.forEach(element => {
      //console.log('iterating over array:');
      //console.log('element', element);
      maxNumbers.push(Math.max(...arr));
    });
  });

  return Math.max(...maxNumbers);
}

console.log(findMax(firstNumbers, secondNumbers, thirdNumbers, forthNumbers));
console.log(findMax(thirdNumbers, secondNumbers, forthNumbers, firstNumbers));
console.log(findMax(forthNumbers, firstNumbers, thirdNumbers, secondNumbers));
console.log(findMax([-78, -95, -43], [-45, -567, -23], [-3, -128, -67], [-239, -84, -17]));

const findMinMax = (...arrs) => {
  let minNumbers = [];
  let maxNumbers = [];
  arrs.forEach(arr => {
    minNumbers.push(Math.min(...arr));
    maxNumbers.push(Math.max(...arr));
  });

  return [Math.min(...minNumbers), Math.max(...maxNumbers)];
}

console.log(findMinMax(firstNumbers, secondNumbers, thirdNumbers, forthNumbers));
console.log(findMinMax(thirdNumbers, secondNumbers, forthNumbers, firstNumbers));
console.log(findMinMax(forthNumbers, firstNumbers, thirdNumbers, secondNumbers));

const findMinMaxDest = (...arrs) => {
  let minNumbers = [];
  let maxNumbers = [];
  arrs.forEach(arr => {
    const minNumberInArray = Math.min(...arr);
    const maxNumberInArray = Math.max(...arr);
    minNumbers.push(minNumberInArray);
    maxNumbers.push(maxNumberInArray);
  });
  const minNumber = Math.min(...minNumbers);
  const maxNumber = Math.max(...maxNumbers);

  return [minNumber, maxNumber];
}

console.log(findMinMaxDest(firstNumbers, secondNumbers, thirdNumbers, forthNumbers));
console.log(findMinMaxDest(thirdNumbers, secondNumbers, forthNumbers, firstNumbers));
console.log(findMinMaxDest(forthNumbers, firstNumbers, thirdNumbers, secondNumbers));

const findMinMaxDestUnique = (...arrs) => {
  let minNumbers = [];
  let maxNumbers = [];
  arrs.forEach(arr => {
    const minNumberInArray = Math.min(...arr);
    const maxNumberInArray = Math.max(...arr);
    minNumbers.push(minNumberInArray);
    maxNumbers.push(maxNumberInArray);
  });
  const minNumber = Math.min(...minNumbers);
  const maxNumber = Math.max(...maxNumbers);

  return [minNumber, maxNumber];
}

console.log(findMinMaxDestUnique([-78, -95, -43], [-45, -567, -23], [-3, -128, -67], [-239, -43, -17]));
