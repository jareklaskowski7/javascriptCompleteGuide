const personData = [{name: 'Max'}, {name: 'Manuel'}];
// it does not find anything, returns -1
console.log(personData.indexOf({name: 'Manuel'}));

// find() does not create the copy
const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

manuel.name = 'Anna';
console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});

console.log(maxIndex);
