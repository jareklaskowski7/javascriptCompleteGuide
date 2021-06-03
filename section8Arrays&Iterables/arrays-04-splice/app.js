// splice() can only be called on real arrays (not iterables, not array-like objects)

const hobbies = ["Sports", "Coding"];

hobbies.splice(0, 0, 'Good Food');
console.log(hobbies);

hobbies.splice(1, 0, 'Bad Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);
