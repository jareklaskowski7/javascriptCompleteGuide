const x1 = document.getElementById('main-title');

x1.textContent = 'Some new title!';
x1.style.color = 'white';
x1.style.backgroundColor = 'black';

const yi = document.querySelector('li:last-of-type');
yi.textContent += ' (Changed!)';

const body = document.body;

// not live list
//const listItemElements = document.querySelectorAll('li');
// live list
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}
