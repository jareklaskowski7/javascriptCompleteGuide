// push() and pop() are faster than unshift() and shift()

const hobbies = ['Sports', 'Cooking'];
console.log(hobbies);

// adds item at the end of the array
hobbies.push('Reading');
console.log(hobbies);

// adds item at the beginning of the array
hobbies.unshift('Coding');
console.log(hobbies);

// removes item from the end of the array
const poppedValue = hobbies.pop();
console.log(poppedValue);

// removes item from the beginning of the array
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
console.log(hobbies);

// rarely used
hobbies[5] = 'Reading';
console.log(hobbies);
console.log(hobbies, hobbies[4]);
