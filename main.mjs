import { Sudoku } from "./sudoku.mjs";


const sudoku = new Sudoku("gridElement1");
console.log(sudoku)
//Algo works 50 percent of the time so we reRoll if its a fail.
let firstTry = true;

function
  findPerfect() {
  if (!firstTry) {
    sudoku.reset();
    sudoku.reRoll();

  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {

      if (sudoku.gridRow[i][j].fin === null) {
        firstTry = !firstTry;
        return findPerfect();
      }
    }
  }
}

findPerfect();
sudoku.addOneToEverySquare(); // I worked from 0 - 8 so this makes it 1 to 9
sudoku.gridDisplay();

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
    console.log(sudoku.gridRow[x][i])
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
      // console.log(sudoku.gridRow[i][j].col);
    });
  }
}

console.log(sudoku.gridElementArray)

sudoku.gridElementArray[0][0].addEventListener("click", () => { console.log("HEY") });
