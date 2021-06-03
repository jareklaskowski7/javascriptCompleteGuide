const prices = [10.99, 5.99, 3.99, 6.59];
//let sum = 0;
//prices.forEach(price => sum += price);

// initial value equals 0, current value equals the first value of the array
/*
const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);
 */

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);
