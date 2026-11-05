// Initial state
let count = 0;

// Create DOM elements - title
const title = document.createElement('h1');
title.textContent = 'Contatore JS x Start2Impact';
document.body.appendChild(title);

// Create DOM elements - counter
const counterElement = document.createElement('span');
counterElement.className = 'counter';
counterElement.textContent = count;
document.body.appendChild(counterElement);

// Functions that update the counter
function render (){
    counterElement.textContent = count;
}

function increase() {
    count++;
    render();
    }

function decrease() {
    count = Math.max(0, count - 1);
    render();
    }

function reset() {
    count = 0;
    render();
    }


// Create buttons function 
function createBtn(id, className, label, onClick) {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.id = id; 
    btn.className = className;
    btn.addEventListener('click', onClick);
    document.body.appendChild(btn);
    return btn;
}

// Start of the buttons 
createBtn('decrease-btn', 'button', '-', decrease);
createBtn('reset-btn', 'reset-btn', 'Reset', reset);
createBtn('increase-btn', 'button', '+', increase);
render();