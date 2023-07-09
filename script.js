const body = document.body;
const eraserButton = document.querySelector('#eraser');
const sizeSlider = document.querySelector('.form-range');
const sliderLabel = document.querySelector('.form-label');
const boardContainer = document.querySelector('.board');
const modeText = document.querySelector('.mode');
let click = false;

function populateBoard(size) {
     sliderLabel.textContent = `Current Board Size: ${size}x${size}    `;
     resetBoard();

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

function resetBoard() {
     const boardColorPicker = document.querySelector('.boardColorPicker');
     const penColorPicker = document.querySelector('.penColorPicker');
     let cell = document.querySelectorAll('.cell');

     for (let j = 0; j < cell.length; j++) {
          cell[j].style.backgroundColor = '';
     }

     changeBoardColor('#FFFFFF');
     changePenColor('#000000');

     // penColorPicker.style.backgroundColor = 'none';
     // boardColorPicker.style.backgroundColor = 'none';
     penColorPicker.setAttribute('value', '#000000');
}

eraserButton.addEventListener('click', () => {
     changePenColor(boardContainer.style.backgroundColor);
})

function changePenColor(choice) {
     color = choice;
}

function changeBoardColor(choice) {
     boardContainer.style.backgroundColor = choice;
}

document.querySelector('.board').addEventListener('click', () => {
     click = !click;
     if(click) {
          modeText.textContent = 'Drawing'
          body.style.backgroundColor = 'aquamarine'
     } else {
          modeText.textContent = 'Not Drawing'
          body.style.backgroundColor = '#c65353'
     }
})