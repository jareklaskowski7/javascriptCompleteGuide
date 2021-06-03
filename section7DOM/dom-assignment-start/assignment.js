const x1 = document.getElementById('task-1');
x1.style.backgroundColor = 'black';
x1.style.color = 'white';

const x2 = document.querySelector('#task-1');
x2.style.backgroundColor = 'black';
x2.style.color = 'white';

const x3 = document.querySelector('li');
x3.style.backgroundColor = 'black';
x3.style.color = 'white';

const x4 = document.querySelector('ol li:first-of-type');
x4.style.backgroundColor = 'black';
x4.style.color = 'white';

const listItemElements = document.getElementsByTagName('li');
const x5 = listItemElements[0];
x5.style.backgroundColor = 'black';
x5.style.color = 'white';

const y1 = document.querySelector('title');
y1.textContent = 'Assignment - Solved!';

const y2 = document.head.querySelector('title');
y2.textContent = 'Assignment - Solved!';

const z1 = document.querySelector('h1');
z1.textContent = 'Assignment - Solved!';

const z2 = document.getElementsByTagName('h1');
z2[0].textContent = 'Assignment - Solved!';

const z3 = document.getElementsByTagName('h1');
z3.item(0).textContent = 'Assignment - Solved!';
