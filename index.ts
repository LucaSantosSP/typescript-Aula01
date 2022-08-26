/*let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>list: ${list}</h2>
<h2>other List: ${otherList}</h2>
`;*/

let me: [string, number];

me = ['Lucas', 22];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Tuple</h1>
<h2> Me chamo ${me[0]} e tenho ${me[1]} anos</h2>
`;
