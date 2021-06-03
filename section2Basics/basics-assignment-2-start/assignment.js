const task3Element = document.getElementById('task-3');

function firstF() {
  alert('In the first function!');
}

function secondF(name) {
  alert(`In the second function!, name is ${name}`);
}

firstF();
secondF('Jarek');

task3Element.addEventListener('click', firstF);

function thridF(name, age, profession) {
  return name + age + profession;
}

const message = thridF('Jarek', ' 45', ' software developer');
alert(message);
