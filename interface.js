export class Interface {
  constructor(mainNode) {
    //Add all the nodes of cells to a 2x2 Array 
    this.cellsArray = [];
    for (let i = 0; i < 9; i++) {
      this.cellsArray[i] = [];
      for (let j = 0; j < 9; j++) {
        this.cellsArray[i][j] = document.querySelector(`.${mainNode}-board--cell${i}${j}`);
      }
    }
    //Add all the number buttons to an array 
    this.numberButtonsArray = document.querySelectorAll(`.${mainNode}-panel--button`);

    //Select buttons erase, and notes. new game is handled in the data class
    this.notesButton = document.querySelector(`.${mainNode}-panel--button-notes`);
    this.eraseButton = document.querySelector(`.${mainNode}-panel--button-erase`);
    //This represents the coordinates of the cell that is currently clicked
    this.currentCell = [4, 4];

    this.highlight(4, 4);
    this.eventListeners(mainNode);
  }
  //Wrap for the arrow keys
  keypressWrapAround() {
    if (this.currentCell[1] === -1) {
      this.currentCell[1] = 8;
    }
    if (this.currentCell[1] === 9) {
      this.currentCell[1] = 0;
    }
    if (this.currentCell[0] === 9) {
      this.currentCell[0] = 0;
    }
    if (this.currentCell[0] === -1) {
      this.currentCell[0] = 8;
    }
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
  //Erase all content of cell 
  erase(mainNode) {
    this.currentNumberWrapper = document.querySelector(`.${mainNode}-board--number-wrapper${this.currentCell[0]}${this.currentCell[1]}`)
    this.currentNumberWrapper.innerHTML = "";
  }
  eventListeners(mainNode) {

    document.body.addEventListener("keydown", (event) => {
      if (event.keyCode == 37) {
        this.currentCell = [this.currentCell[0], this.currentCell[1] - 1];
        this.keypressWrapAround();
        this.highlight(this.currentCell[0], this.currentCell[1]);

      }
      if (event.keyCode == 39) {
        this.currentCell = [this.currentCell[0], this.currentCell[1] + 1];
        this.keypressWrapAround();
        this.highlight(this.currentCell[0], this.currentCell[1]);
      }
      if (event.keyCode == 40) {
        this.currentCell = [this.currentCell[0] + 1, this.currentCell[1]];
        this.keypressWrapAround();
        this.highlight(this.currentCell[0], this.currentCell[1]);
      }
      if (event.keyCode == 38) {
        this.currentCell = [this.currentCell[0] - 1, this.currentCell[1]];
        this.keypressWrapAround();
        this.highlight(this.currentCell[0], this.currentCell[1]);
      }
    });
    this.numberButtonsArray.forEach((button) => {
      button.addEventListener("click", () => {

        console.log("HEY")
      })
    })
    this.eraseButton.addEventListener("click", () => {
      this.erase(mainNode);
    })
    this.notesButton.addEventListener("click", () => {
      console.log("notes")
    })
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.cellsArray[i][j].addEventListener("click", () => {
          this.highlight(i, j);
          this.currentCell = [i, j];
        })
      }
    }
  }
}
