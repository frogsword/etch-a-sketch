const resetButton = document.querySelector('#boardReset');
const sizeButton = document.querySelector('#setSize');
const boardContainer = document.querySelector('.board');
let color = 'black';
let click = false;

function populateBoard(size) {
     let board = document.querySelector('.board');
          board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
          board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
     for (let i = 0; i < (size*size); i++) {
          let square = document.createElement('div');
          square.classList.add('cell');
          board.insertAdjacentElement('beforeend', square);
     }

     let cell = document.querySelectorAll('.cell');

     function fillCell(j, color) {
          if (click) {
               if (color == 'random') {
                    const letters = '0123456789ABCDEF';
                    let color = '#';
                    for (let i = 0; i < 6; i++) {
                         color += letters[Math.floor(Math.random() * 16)];
                    }
                    cell[j].style.backgroundColor = color;
               } else {
                    cell[j].style.backgroundColor = color;
               }
          }
     }

     for (let j = 0; j < cell.length; j++) {              
          cell[j].addEventListener('mouseover', () => fillCell(j, color));
     }
}
populateBoard(64);

sizeButton.onclick = () => {
     let size = prompt('Enter board width between 2 and 100');
     resetBoard();
     populateBoard(size);
}

function resetBoard() {
     let cell = document.querySelectorAll('.cell');
     for (let j = 0; j < cell.length; j++) {
          cell[j].style.backgroundColor = 'white';
     }
}
resetButton.onclick = () => resetBoard();

function changeColor(choice) {
     color = choice;
}

document.querySelector('.board').addEventListener('click', () => {
     click = !click;
})