//getting needed variables
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const gridSize = document.querySelector('#gridSize');
const grabDivAfter = '';

let userRow = 16;
let userCol = 16;

function askingUser() {
    userRow = prompt('How many rows?');
    userCol = prompt('How many columns?');

    makeRows(userRow, userCol);
    grabDivAfter = document.querySelectorAll('.grid-item');
}


gridSize.addEventListener('click', askingUser);

resetBtn.addEventListener('click', function () {
    container.innerHTML = '';
});

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}


makeRows(userRow, userCol);




let hue = 0;

function hoverMe(e) {
    console.log('hi')
    this.style.background = `hsl(${hue}, 100%, 50%)`;
    hue++;
}


let divs = document.querySelectorAll('.grid-item');
resetBtn.addEventListener('click', reset);


divs.forEach(div => div.addEventListener('mousemove', hoverMe));
divs.forEach(div => div.addEventListener('mouseout', hoverMe));