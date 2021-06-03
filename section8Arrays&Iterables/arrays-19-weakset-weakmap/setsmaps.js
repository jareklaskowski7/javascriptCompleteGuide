let person = {name: 'Max'};
// WeakSet requires objects
const persons = new WeakSet();
persons.add(person);
// ... some operations
//person = null;
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!');
person = null;
console.log(personData);
