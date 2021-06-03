const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(2);
console.log(testResults, storedResults);

testResults.push(5.91);
console.log(testResults, storedResults);
