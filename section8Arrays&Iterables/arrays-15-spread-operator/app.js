const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}];
// the references are being copied
//const copiedPersons = [...persons];
const copiedPersons = persons.map(person => ({
  name: person.name,
  age: person.age
}));
persons.push({name: 'Anna', age: 29});
persons[0].age = 31;
console.log(persons, copiedPersons);
