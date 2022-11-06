import { Sudoku } from "./sudoku.mjs";
import { Notes } from "./sudoku.mjs";

const sudoku = new Sudoku("gridElement1");
const noteClassArray = [];

for (let i = 0; i < 9; i++) {
  noteClassArray.push([])
  for (let j = 0; j < 9; j++) {
    noteClassArray[i].push(new Notes(i, j))
  }
}


let noteState = false;
const dashboardButton = document.querySelectorAll("div.button");
dashboardButton.forEach((item) => {
  item.addEventListener("click", () => {
    if (!noteState) {
      sudoku.gridRow[currentCell[0]][currentCell[1]].fin = item.innerHTML;
      sudoku.gridDisplay();
      noteToggle();
    }
    if (noteState && noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[item.innerHTML - 1].active) {
      noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[item.innerHTML - 1].HTMLElement.innerHTML = "";

    }
    if (noteState && !noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[item.innerHTML - 1].active) {
      noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[item.innerHTML - 1].HTMLElement.innerHTML = item.innerHTML;
    }
    if (noteState) {
      noteClassArray[currentCell[0]][currentCell[1]]
        .noteGridArray[item.innerHTML - 1].active = !noteClassArray[currentCell[0]][currentCell[1]]
          .noteGridArray[item.innerHTML - 1].active;
      noteToggle();
    }
  })
})
//  Put the note grid into the cell for each
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let cellElement = document.querySelector(`div.cell${i}${j}`);
    let particularNoteGrid = document.querySelector(`div.notegrid${i}${j}`);
    particularNoteGrid.classList.add("hidden")
    console.log(cellElement)
    cellElement.appendChild(particularNoteGrid);
    cellElement.appendChild(sudoku.gridNumberArray[i][j]);
  }
}
function noteToggle() {

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (noteState) {
        let noteGrid = document.querySelector(`div.notegrid${currentCell[0]}${currentCell[1]}`);
        sudoku.gridNumberArray[currentCell[0]][currentCell[1]].classList.add("hidden");
        noteGrid.classList.remove("hidden");
      }
      if (!noteState) {
        let noteGrid = document.querySelector(`div.notegrid${currentCell[0]}${currentCell[1]}`);
        sudoku.gridNumberArray[currentCell[0]][currentCell[1]].classList.remove("hidden");
        noteGrid.classList.add("hidden");
      }
    }
  }
}
//Note Button
const noteButton = document.querySelector(".buttoncontrol");
noteButton.addEventListener("click", () => {

  noteButton.classList.toggle("-yellow");
  noteState = !noteState;
});

// Reroll button
document.getElementById("reroll").addEventListener('click', () => {
  sudoku.reset();
  sudoku.findPerfect();
  sudoku.addOneToEverySquare();
  sudoku.gridDisplay();
})
//Highlights row col and section that a cell is apart of
function highlight(x, y) {

  sudoku.gridElementArray[x][y].classList.add("centerhighlightstyle");
  //Reset previous highlighted cells 
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudoku.gridElementArray[i][j].classList.remove("highlightstyle");
      // sudoku.gridElementArray[i][j].classList.add("centerhighlightstyle");
    }
  }
  //Highlight rows and cols 
  for (let i = 0; i < 9; i++) {
    sudoku.gridElementArray[x][i].classList.add("highlightstyle");
    sudoku.gridElementArray[i][y].classList.add("highlightstyle");
    //     // sudoku.gridRow[x][i].classList.add('highlightstyle');
    //     // if (sudoku.grid[i][y] == n) return false;

  }


  //Highlight sections 
  let x0 = Math.floor((x / 3)) * 3;
  let y0 = Math.floor((y / 3)) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sudoku.gridElementArray[x0 + i][y0 + j].classList.add("highlightstyle");

    }
  }

}

function removeHighlight() {

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudoku.gridElementArray[i][j].classList.remove("centerhighlightstyle");
    }
  }
}
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    sudoku.gridElementArray[i][j].addEventListener("click", () => {
      if (sudoku.gridRow[i][j].unclickable) return;
      removeHighlight(i, j);
      highlight(i, j);
      currentCell = [i, j];
      sudoku.gridDisplay();
    });
    // sudoku.gridElementArray[i][j].addEventListener("mouseout", () => {
    //   removeHighlight(sudoku.gridRow[i][j].row, sudoku.gridRow[i][j].col);
    // });
  }
}
// const keyBoard = document.querySelector('.keyboard');
function keypressWrapAround() {
  if (currentCell[1] === -1) {
    currentCell[1] = 8
  }
  if (currentCell[1] === 9) {
    currentCell[1] = 0
  }
  if (currentCell[0] === 9) {
    currentCell[0] = 0
  }
  if (currentCell[0] === -1) {
    currentCell[0] = 8

  }
}
let currentCell = [4, 4];

function numberKeyDown(number, pos) {

  if (!noteState) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = number;
    sudoku.gridDisplay();
    noteToggle();
  }
  if (noteState && noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[pos].active) {
    noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[pos].HTMLElement.innerHTML = "";

  }
  if (noteState && !noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[pos].active) {
    noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[pos].HTMLElement.innerHTML = number;
  }
  if (noteState) {
    noteClassArray[currentCell[0]][currentCell[1]]
      .noteGridArray[pos].active = !noteClassArray[currentCell[0]][currentCell[1]]
        .noteGridArray[pos].active;
    noteToggle();
  }

}

highlight(currentCell[0], currentCell[1])
document.body.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    currentCell = [currentCell[0], currentCell[1] - 1];
    keypressWrapAround();
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);

  }
  if (event.keyCode == 39) {
    currentCell = [currentCell[0], currentCell[1] + 1];
    keypressWrapAround();
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);
  }
  if (event.keyCode == 40) {
    currentCell = [currentCell[0] + 1, currentCell[1]];
    keypressWrapAround();
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);
  }
  if (event.keyCode == 38) {
    currentCell = [currentCell[0] - 1, currentCell[1]];
    keypressWrapAround();
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);
  }

  if (event.keyCode == 49) {
    numberKeyDown(1, 0);

  }
  if (event.keyCode == 50) {
    numberKeyDown(2, 1);
  }

  if (event.keyCode == 51) {
    numberKeyDown(3, 2);
  }
  if (event.keyCode == 52) {
    numberKeyDown(4, 3);
  }
  if (event.keyCode == 53) {
    numberKeyDown(5, 4);
  }
  if (event.keyCode == 54) {
    numberKeyDown(6, 5);
  }
  if (event.keyCode == 55) {
    numberKeyDown(7, 6);
  }
  if (event.keyCode == 56) {
    numberKeyDown(8, 7);
  }
  if (event.keyCode == 57) {
    numberKeyDown(9, 8);
  }
});

function drawBoarder() {

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (i === 2 || i === 5) {
        sudoku.gridElementArray[i][j].classList.add("borderbottom")
      }
      if (j === 2 || j === 5) {
        sudoku.gridElementArray[i][j].classList.add("borderright")
      }
    }
  }
}
drawBoarder();
