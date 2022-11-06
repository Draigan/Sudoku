import * as solver from "/solver.mjs";
// console.log(solver.solve(
//   [
//     [0, 0, 0, 0, 0, 9, 0, 0, 0],
//     [0, 0, 0, 3, 0, 0, 4, 0, 2],
//     [0, 6, 0, 5, 0, 0, 3, 0, 7],
//     [0, 9, 0, 0, 5, 0, 0, 2, 0],
//     [2, 0, 0, 6, 0, 0, 0, 0, 0],
//     [0, 0, 3, 4, 0, 2, 1, 0, 0],
//     [5, 3, 1, 2, 0, 6, 0, 0, 0],
//     [0, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 8, 0, 7, 0]
//   ]
// ));
export class Notes {

  // Draw note cells
  constructor(_i, _j) {
    this.id = [_i, _j];
    this.noteGrid = document.createElement("div");
    this.noteGridArray = [];
    document.body.appendChild(this.noteGrid)
    this.noteGrid.classList.add("notegrid");
    this.noteGrid.classList.add(`notegrid${_i}${_j}`);

    for (let i = 0; i < 9; i++) {
      this.noteGridArray.push({
        name: `note${i}`,
        active: false,
        HTMLElement: this.noteGrid.appendChild(document.createElement("div"))
      });
      this.noteGridArray[i].HTMLElement.classList.add("notecell");
      this.noteGridArray[i].HTMLElement.classList.add(`notecell${i}`);

    }
  }
}
export class Sudoku {
  constructor(htmlElement) {

    document.getElementById(htmlElement).classList.add("container");
    this.gridElement = document.getElementById(htmlElement).appendChild(document.createElement('div'));
    this.gridElement.classList.add("grid");
    this.dashBoard = document.getElementById(htmlElement).appendChild(document.createElement('div'));
    // Draw buttons
    this.buttonArray = [];
    for (let i = 0; i < 9; i++) {
      this.buttonArray.push({
        name: `button${i}`,
        HTMLElement: this.dashBoard.appendChild(document.createElement('div'))
      })


      this.buttonArray[i].HTMLElement.classList.add("button");
      this.buttonArray[i].HTMLElement.innerHTML = i + 1;

    }
    this.buttonArray.push({
      name: `notes`,
      HTMLElement: this.dashBoard.appendChild(document.createElement('div'))
    });
    this.buttonArray.push({
      name: `erase`,
      HTMLElement: this.dashBoard.appendChild(document.createElement('div'))
    });
    this.buttonArray[9].HTMLElement.classList.add("buttoncontrol");
    this.buttonArray[9].HTMLElement.innerHTML = "Notes";
    this.dashBoard.classList.add("dashboard");

    this.buttonArray[10].HTMLElement.classList.add("buttoncontrol");
    this.buttonArray[10].HTMLElement.innerHTML = "Erase";
    this.dashBoard.classList.add("dashboard");

    // console.log(document.querySelector("div.notegrid"))
    this.gridElementArray = [];
    this.gridRow = [];
    this.sectionZero = [];
    this.sectionOne = [];
    this.sectionTwo = [];
    this.sectionThree = [];
    this.sectionFour = [];
    this.sectionFive = [];
    this.sectionSix = [];
    this.sectionSeven = [];
    this.sectionEight = [];
    this.colZero = [];
    this.colOne = [];
    this.colTwo = [];
    this.colThree = [];
    this.colFour = [];
    this.colFive = [];
    this.colSix = [];
    this.colSeven = [];
    this.colEight = [];
    this.smallest = { val: "00000000000" };
    this.breaker = 0;
    this.firstTry = true;
    this.gridNumberArray = [];
    this.drawNumberWrapper();
    this.createGrid();
    this.sectionGrid();
    this.reRoll();
    this.findPerfect();
    this.addOneToEverySquare(); // I worked from 0 - 8 so this makes it 1 to 9
    console.log(solver.solve(this.gridRow))
    this.gridDisplay();
  }

  reset() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.gridRow[i][j].fin = null;
        this.gridRow[i][j].val = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      }
    }
  }

  reRoll() {

    this.reset();
    this.mainAlgoRunner();
  }


  createGrid() {
    for (let i = 0; i < 9; i++) {
      this.gridElementArray[i] = [];
      this.gridRow[i] = [];

      for (let j = 0; j < 9; j++) {
        this.gridElementArray[i][j] = document.createElement("div");
        this.gridElementArray[i][j].classList.add("cell")
        this.gridElementArray[i][j].classList.add(`cell${i}${j}`)
        this.gridElementArray[i][j];
        this.gridElement.appendChild(this.gridElementArray[i][j]);
        this.gridRow[i][j] = {
          id: i.toString() + j.toString(),
          val: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          section: null,
          col: null,
          row: i,
          fin: null,
          unclickable: false
        }
      }
    }
  }

  findSmallestArrayLength() {

    const smallestArray = [];

    //Find the smallest val.length
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.gridRow[i][j].val != undefined
          && this.gridRow[i][j].val.length < this.smallest.val.length) {
          this.smallest = this.gridRow[i][j];
        }

      }
    }
    //Put all the arrays with that length inside an array

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.gridRow[i][j].val.length === this.smallest.val.length) {
          smallestArray.push(this.gridRow[i][j]);
        }


      }
    }
    //Randomly pick one of those array objects
    this.smallest = smallestArray[Math.floor(Math.random() * smallestArray.length)];
    //Return it. Congrats we have picked a random object with the lowest value.
    return this.smallest;
  }

  // Basically run the algo 81x
  mainAlgoRunner() {
    this.mainAlgo(this.gridRow[4][4]);
    this.mainAlgo(this.gridRow[0][4]);
    this.mainAlgo(this.gridRow[1][4]);

    for (let i = 0; i < 78; i++) {
      this.findSmallestArrayLength()
      this.mainAlgo(this.smallest);
    }

  }

  mainAlgo(square) {

    let { val, row, col, section } = square;
    let number;
    this.breaker = 0;

    //do while loop contains a breaker that checks to see if im stuck in recursion - concept could be improved upon, Im sure, 
    //I just dont know what that would entail.
    do {
      number = Math.floor(Math.random() * 9);
      if (this.breaker == 190) {
        return
      } ++this.breaker
    }
    while (!val.includes(number) && this.breaker < 200)

    square.fin = number;
    let tempArray = [];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.gridRow[i][j].col === col) {
          tempArray.push(this.gridRow[i][j]);
        }
        if (this.gridRow[i][j].row === row && !tempArray.includes(this.gridRow[i][j])) {
          tempArray.push(this.gridRow[i][j]);
        }
        if (this.gridRow[i][j].section === section && !tempArray.includes(this.gridRow[i][j])) {
          tempArray.push(this.gridRow[i][j]);
        }
      }
    }

    for (let item of tempArray) {
      if (item.val != undefined && item.val.includes(number)) {
        item.val.splice(item.val.indexOf(number), 1);
      }

    }

    //dots are for the val.length because we use it somewhere else, but this is basically just removing 
    //it from the flow of the program.
    square.val = ".............";
    return
  }

  findPerfect() {
    if (!this.firstTry) {
      this.reset();
      this.reRoll();

    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

        if (this.gridRow[i][j].fin === null) {
          this.firstTry = !this.firstTry;
          return this.findPerfect();
        }
      }
    }
  }
  sectionGrid() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        //Sections
        if (i <= 2 && j <= 2) {
          this.sectionZero.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 0;
        }
        if (i <= 2 && j >= 3 && j <= 5) {
          this.sectionOne.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 1;
        }
        if (i <= 2 && j >= 6 && j <= 8) {
          this.sectionTwo.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 2;
        }
        if (i >= 3 && i <= 5 && j <= 2) {
          this.sectionThree.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 3;
        }
        if (i >= 3 && i <= 5 && j >= 3 && j <= 5) {
          this.sectionFour.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 4;
        }
        if (i >= 3 && i <= 5 && j >= 6 && j <= 8) {
          this.sectionFive.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 5;
        }
        if (i >= 6 && i <= 8 && j <= 2) {
          this.sectionSix.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 6;
        }
        if (i >= 6 && i <= 8 && j >= 3 && j <= 5) {
          this.sectionSeven.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 7;
        }
        if (i >= 6 && i <= 8 && j >= 6 && j <= 8) {
          this.sectionEight.push(this.gridRow[i][j]);
          this.gridRow[i][j].section = 8;
        }

        //Columns
        if (j === 0) {
          this.colZero.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 0;
        }
        if (j === 1) {
          this.colOne.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 1;
        }
        if (j === 2) {
          this.colTwo.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 2;
        }
        if (j === 3) {
          this.colThree.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 3;
        }
        if (j === 4) {
          this.colFour.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 4;
        }
        if (j === 5) {
          this.colFive.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 5;
        }
        if (j === 6) {
          this.colSix.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 6;
        }
        if (j === 7) {
          this.colSeven.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 7;
        }
        if (j === 8) {
          this.colEight.push(this.gridRow[i][j]);
          this.gridRow[i][j].col = 8;
        }

      }
    }
  }

  drawNumberWrapper() {

    for (let i = 0; i < 9; i++) {
      this.gridNumberArray[i] = [];
      for (let j = 0; j < 9; j++) {
        this.gridNumberArray[i][j] = document.createElement("div");
        this.gridNumberArray[i][j].classList.add(`number`)
        this.gridNumberArray[i][j].classList.add(`number${i}${j}`)

      }
    }
  }
  gridDisplay() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.gridNumberArray[i][j].innerHTML = this.gridRow[i][j].fin;
      }
    }
  }
  addOneToEverySquare() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.gridRow[i][j].fin++
      }
    }
  }
}

