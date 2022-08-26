/*let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>list: ${list}</h2>
<h2>other List: ${otherList}</h2>
`;

let me: [string, number];

me = ['Lucas', 22];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Tuple</h1>
<h2> Me chamo ${me[0]} e tenho ${me[1]} anos</h2>
`;

enum Color {
  Red,
  Green,
  Blue,
}
let color1 = Color.Green;

enum ColorWithRef {
  Red = '10',
  Green = '20',
  Blue = 'Teste',
}
let color2 = ColorWithRef.Blue;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>Enum<h1>
  <h2>Cor 1: ${color1}</h2>
  <h2>Cor 2: ${color2}</h2>
`;

let notSure: any = 4;
notSure = 'Maybe I am a string';
notSure = false;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>Any Variable</h1>
  <h2>${notSure}</h2>
`;
function warnUser(): void {
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
create(undefined); //ok*/
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
