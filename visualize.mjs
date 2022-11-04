import { Sudoku } from "./sudoku.mjs";
import * as main from "/main.mjs";
//Highlights row col and section that a cell is apart of
function highlight(x, y) {

  main.sudoku.gridElementArray[x][y].classList.add("centerhighlightstyle");
  //Reset previous highlighted cells 
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      main.sudoku.gridElementArray[i][j].classList.remove("highlightstyle");
      // sudoku.gridElementArray[i][j].classList.add("centerhighlightstyle");
    }
  }
  //Highlight rows and cols 
  for (let i = 0; i < 9; i++) {
    main.sudoku.gridElementArray[x][i].classList.add("highlightstyle");
    main.sudoku.gridElementArray[i][y].classList.add("highlightstyle");
    //     // sudoku.gridRow[x][i].classList.add('highlightstyle');
    //     // if (sudoku.grid[i][y] == n) return false;

  }


  //Highlight sections 
  let x0 = Math.floor((x / 3)) * 3;
  let y0 = Math.floor((y / 3)) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      main.sudoku.gridElementArray[x0 + i][y0 + j].classList.add("highlightstyle");

    }
  }

}

function removeHighlight() {

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      main.sudoku.gridElementArray[i][j].classList.remove("centerhighlightstyle");
    }
  }
}
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    main.sudoku.gridElementArray[i][j].addEventListener("mouseover", () => {
      highlight(main.sudoku.gridRow[i][j].row, main.sudoku.gridRow[i][j].col);
    });


    main.sudoku.gridElementArray[i][j].addEventListener("click", () => {
      if (main.sudoku.gridRow[i][j].unclickable) return;
      if (main.sudoku.gridRow[i][j].fin >= 9) {
        main.sudoku.gridRow[i][j].fin = 0;
      }
      console.log(++main.sudoku.gridRow[i][j].fin)
      main.sudoku.gridDisplay();
    });
    main.sudoku.gridElementArray[i][j].addEventListener("mouseout", () => {
      removeHighlight(main.sudoku.gridRow[i][j].row, main.sudoku.gridRow[i][j].col);
    });
  }
}
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
    console.log(currentCell)
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);

  }
  if (event.keyCode == 39) {
    currentCell = [currentCell[0], currentCell[1] + 1];
    keypressWrapAround();
    console.log(currentCell)
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);
  }
  if (event.keyCode == 40) {
    currentCell = [currentCell[0] + 1, currentCell[1]];
    keypressWrapAround();
    console.log(currentCell)
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);
  }
  if (event.keyCode == 38) {
    currentCell = [currentCell[0] - 1, currentCell[1]];
    keypressWrapAround();
    console.log(currentCell)
    removeHighlight();
    highlight(currentCell[0], currentCell[1]);
  }

  if (event.keyCode == 49) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 1;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 50) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 2;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 51) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 3;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 52) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 4;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 53) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 5;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 54) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 6;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 55) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 7;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 56) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 8;
    main.sudoku.gridDisplay();
  }
  if (event.keyCode == 57) {
    main.sudoku.gridRow[currentCell[0]][currentCell[1]].fin = 9;
    main.sudoku.gridDisplay();
  }
});

