export class Interface {
  constructor(mainNode) {
    //Add all the nodes of cells to a 2x2 Array
    this.cellsArray = [];
    for (let i = 0; i < 9; i++) {
      this.cellsArray[i] = [];
      for (let j = 0; j < 9; j++) {
        this.cellsArray[i][j] = document.querySelector(`.${mainNode}-board--cell${i}${j}`)
      }
    }
    this.eventListeners();
  }
  highlight(x, y) {

    //Reset previous highlighted cells 
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.cellsArray[i][j].classList.remove("-highlight");
        this.cellsArray[i][j].classList.remove("-center-highlight");
      }
    }
    //Highlight clicked cell
    this.cellsArray[x][y].classList.add("-center-highlight");
    //Highlight rows and cols 
    for (let i = 0; i < 9; i++) {
      this.cellsArray[x][i].classList.add("-highlight");
      this.cellsArray[i][y].classList.add("-highlight");

    }

    //Highlight sections 
    let x0 = Math.floor((x / 3)) * 3;
    let y0 = Math.floor((y / 3)) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.cellsArray[x0 + i][y0 + j].classList.add("-highlight");

      }
    }

  }
  eventListeners() {

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.cellsArray[i][j].addEventListener("click", () => {
          this.highlight(i, j);
        })
      }
    }
  }
}
