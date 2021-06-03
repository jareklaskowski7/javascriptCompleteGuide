const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(testResults, storedResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));
console.log(testResults.includes(10.99));
