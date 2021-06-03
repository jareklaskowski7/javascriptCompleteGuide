const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

const data = 'new york;10.99;2000';
const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);
