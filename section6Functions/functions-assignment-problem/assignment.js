function sayHello(name) {
  console.log('Hi ' + name);
}

const devName = 'Jarek';
sayHello(devName);

const sayHello2 = name => console.log('Hi ' + name);
sayHello2(devName);

const sayHello3 = (greeting, name) => console.log(greeting + name);
const greeting3 = 'Hello ';
sayHello3(greeting3, devName);

const sayHello4 = () => console.log('Hi James');
sayHello4();

const sayHello5 = name => 'Hi ' + name;
console.log(sayHello5(devName));

const sayHello6 = (name = 'John') => console.log('Hi ' + name);
sayHello6();
sayHello6('Paul');

const checkInput = (cb, ...names) => {
  let hasEmptyName = false;
  for (const name of names) {
    if (!name) {
      hasEmptyName = true;
      break;
    }
  }

  if (!hasEmptyName) {
    cb();
  }
}

checkInput(() => {
    console.log('All names are not empty');
  },
  'John', 'Paul', 'George', 'Ringo');
