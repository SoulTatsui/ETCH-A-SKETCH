//getting needed variables
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
const gridSize = document.querySelector('#gridSize');
const grabDivAfter = '';

let userRow = prompt('How many rows?');
let userCol = prompt('How many columns?');

function askingUser() {
    userRow = prompt('How many rows?');
    userCol = prompt('How many columns?');

    makeRows(userRow, userCol);

}


gridSize.addEventListener('click', askingUser);

function removeElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }
}

resetBtn.addEventListener('click', function () {
    //removeElements(document.querySelectorAll('.grid-item'));
    location.reload();
});

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
    console.log('fuck');

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


document.querySelectorAll('.grid-item').forEach(div => div.addEventListener('mousemove', hoverMe));
document.querySelectorAll('.grid-item').forEach(div => div.addEventListener('mouseout', hoverMe));