/*function warnUser(): void {
  console.log('This is my warning message');
}

let myFunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myFunction;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>Void<h1>
  <h2>${unusable}</h2>
  <h2>${myFunction}</h2>
`;

declare function create(o: object | null): void;
create({ prop: 0 }); //ok
create(null); //ok
//create(42); erro
//create('String'); erro
//create(false); erro
create(undefined); //ok
let someValue: any = 'This is a string';
let strLenght: number = (<string>someValue).length;

let someValue2: any = 'This is another string!';
let strLenght2: number = (someValue2 as string).length;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>Type assertions</h1>
  <h2>${strLenght}</h2>
  <h2>${strLenght2}</h2>
`;

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function fullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName;
}

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1> Functions </h1>
  <h2>Soma de 2 e 3: ${sum(2, 3)}</h2>
  <h2>Soma de 11 e 329: ${sum(11, 329)}</h2>
  <h2>Meu nome completo: ${fullName('Lucas', 'Santos')}</h2>
`;

let title: string = 'Olá, mundo!';
let paragraph: string = 'Blablabla..';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = 'Contador: ' + counter;
}, 1000);

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com typescript');
}

const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;*/
