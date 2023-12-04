const container = document.querySelector('#container');

const mainDiv = document.createElement('div');

const redP = document.createElement('p');
redP.classList.toggle('red-text');
redP.textContent = "Hey I'm red!";

const h3 = document.createElement('h3');
h3.classList.toggle('blue-text');
h3.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.classList.toggle('content');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.textContent = 'ME TOO!';

container.appendChild(mainDiv);
mainDiv.appendChild(redP);
mainDiv.appendChild(h3);
mainDiv.appendChild(div);
div.appendChild(h1);
div.appendChild(p);