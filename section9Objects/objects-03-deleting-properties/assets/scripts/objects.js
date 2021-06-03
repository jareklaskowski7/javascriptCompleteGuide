let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  }
};

person.age = 31;
person.isAdmin = true;
//delete person.age;
// person.age = undefined;  // do not use it!
person.age = null;
console.log(person);
