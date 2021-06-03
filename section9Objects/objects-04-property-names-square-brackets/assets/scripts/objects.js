let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  }
};

person.isAdmin = true;

console.log(person['first name']);
console.log(person['age']);

const movieList = document.getElementById('movie-list');
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';
