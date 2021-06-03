const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};
const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'two weeks ago', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries())
  console.log(entry);

for (const [key, value] of personData.entries())
  console.log(key, value);

for (const key of personData.keys())
  console.log(key);

for (const value of personData.values())
  console.log(value);

console.log(personData.size);
