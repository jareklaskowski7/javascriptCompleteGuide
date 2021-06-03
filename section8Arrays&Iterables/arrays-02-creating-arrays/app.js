const numbers = [1, 2, 3];
console.log(numbers);

//const moreNumbers = new Array();
//console.log(moreNumbers);

//const words = new Array('Hey', 'You!');
//console.log(words);

//const moreNumbers = new Array(5, 2);
//console.log(moreNumbers);

// Omit new
//const moreNumbers = Array(5, 2);
//console.log(moreNumbers);

// Empty array of length 5
//const moreNumbers = new Array(5); // [empty × 5]
//console.log(moreNumbers);

//const yetMoreNumbers = Array.of(1, 2);
//console.log(yetMoreNumbers);

// from() takes iterable or array-like object
//const moreNumbers = Array.from(1, 2); // It does not work
const str = Array.from('Hi!');
console.log(str);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData)
  for (const dataPoint of data)
    console.log(dataPoint);

const personalData = [30, 'Max', {moreDetail: []}];
console.log(personalData[1]);
