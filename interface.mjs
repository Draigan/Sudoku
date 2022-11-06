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
    }
  })
})

//  Put the note grid into the cell for each
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let cellElement = document.querySelector(`div.cell${i}${j}`);
    let noteGrid = document.querySelector(`div.notegrid${i}${j}`);
    console.log(cellElement)
    cellElement.appendChild(noteGrid);
    cellElement.appendChild(sudoku.gridNumberArray[i][j]);
    // cell[i][j].appendChild(noteGrid[i][j]);
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
    if (!noteState) {
      sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 1;
      sudoku.gridDisplay();
    }
    if (noteState && noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[0].active) {
      noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[0].HTMLElement.innerHTML = "";

    }
    if (noteState && !noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[0].active) {
      noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[0].HTMLElement.innerHTML = 1;
    }
    if (noteState) {
      noteClassArray[currentCell[0]][currentCell[1]]
        .noteGridArray[0].active = !noteClassArray[currentCell[0]][currentCell[1]]
          .noteGridArray[0].active;
    }

  }
  if (event.keyCode == 50) {
    if (!noteState) {
      sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 2;
      sudoku.gridDisplay();
    }
    if (noteState && noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[1].active) {
      noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[1].HTMLElement.innerHTML = "";

    }
    if (noteState && !noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[0].active) {
      noteClassArray[currentCell[0]][currentCell[1]].noteGridArray[1].HTMLElement.innerHTML = 1;
    }
    if (noteState) {
      noteClassArray[currentCell[0]][currentCell[1]]
        .noteGridArray[1].active = !noteClassArray[currentCell[0]][currentCell[1]]
          .noteGridArray[1].active;
    }
    if (noteState) {
      document.querySelector(".cell1").innerHTML = 2;
    }
  }
  if (event.keyCode == 51) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 3;
    sudoku.gridDisplay();
    if (noteState) {
      document.querySelector(".cell2").innerHTML = 3;
    }
  }
  if (event.keyCode == 52) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 4;
    sudoku.gridDisplay();
    if (noteState) {
      document.querySelector(".cell3").innerHTML = 4;
    }
  }
  if (event.keyCode == 53) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 5;
    sudoku.gridDisplay();
    if (noteState) {
      document.querySelector(".cell4").innerHTML = 5;
    }
  }
  if (event.keyCode == 54) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 6;
    sudoku.gridDisplay();
    if (noteState) {
      document.querySelector(".cell5").innerHTML = 6;
    }
  }
  if (event.keyCode == 55) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 7;
    sudoku.gridDisplay();
    if (noteState) {
      document.querySelector(".cell6").innerHTML = 7;
    }
  }
  if (event.keyCode == 56) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 8;
    sudoku.gridDisplay();
    if (noteState) {
      document.querySelector(".cell7").innerHTML = 8;
    }
  }
  if (event.keyCode == 57) {
    sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 9;
    sudoku.gridDisplay();
    if (noteState) {
      document.querySelector(".cell8").innerHTML = 9;
    }
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
