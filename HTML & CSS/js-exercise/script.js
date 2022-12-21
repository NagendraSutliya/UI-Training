const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.cssText = 'color: red';

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!";
heading.style.cssText = 'color: blue';

container.appendChild(paragraph);
container.appendChild(heading);

const divE1 = document.createElement('div');
divE1.setAttribute('style', 'border: 1px solid black; background: pink');

const headingh1 = document.createElement('h1');
headingh1.textContent = "I'm in a div";
const para = document.createElement('p');
para.textContent = "ME TOO!";

divE1.appendChild(headingh1);
divE1.appendChild(para);

container.appendChild(divE1);