import { Sudoku } from "./sudoku.mjs";


const sudoku = new Sudoku("gridElement1");


// Reroll button
document.getElementById("reroll").addEventListener('click', () => {
  sudoku.reset();
  findPerfect();
  sudoku.addOneToEverySquare();
  sudoku.gridDisplay();
})

//Highlights row col and section that a cell is apart of
function highlight(x, y) {

  //Reset previous highlighted cells 
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudoku.gridElementArray[i][j].classList.remove("highlightstyle");
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

document.getElementById("gridElement1").addEventListener("mouseout", () => {

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudoku.gridElementArray[i][j].classList.remove("highlightstyle");
    }
  }
})

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    sudoku.gridElementArray[i][j].addEventListener("mouseover", () => {
      highlight(sudoku.gridRow[i][j].row, sudoku.gridRow[i][j].col);
    });
  }
}


