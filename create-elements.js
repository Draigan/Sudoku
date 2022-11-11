export class Creator {
  constructor(mainNode) {
    //Select main node
    this.mainNode = document.getElementById(mainNode);
    //Create Container & Append to main node
    this.container = document.createElement("div");
    this.container.classList.add(`container`, `${mainNode}-container`);
    this.mainNode.appendChild(this.container);
    //Create Board
    this.createDiv(this.container, "board", `${mainNode}-board`);
    //Create Cells, wrapper for the number, and note grid + its cells
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.createDiv(`.${mainNode}-board`, "board--cell", `${mainNode}-board--cell${i}${j}`);
        this.createDiv(`.${mainNode}-board--cell${i}${j}`, "board--number-wrapper", `${mainNode}-board--number-wrapper${i}${j}`);
        this.createDiv(`.${mainNode}-board--cell${i}${j}`, "board--note-grid", `${mainNode}-board--note-grid${i}${j}`);
        for (let k = 0; k < 9; k++) {

          this.createDiv(`.${mainNode}-board--note-grid${i}${j}`, "note-grid--cell", `note-grid--cell${k}`);
        }
      }
    }
    //Create the button panel and buttons
    this.createDiv(this.container, "panel", `${mainNode}-panel`);
    this.newGameButton =
      this.createDiv(`.${mainNode}-panel`, "panel--button-new-game", `${mainNode}-panel--button-new-game`);
    this.newGameButton.innerHTML = "New Game";
    for (let i = 1; i <= 9; i++) {

      this.panelButton = this.createDiv(`.${mainNode}-panel`, "panel--button", `${mainNode}-panel--button${i}`);
      this.panelButton.innerHTML = `${i}`
    }
    this.notesButton =
      this.createDiv(`.${mainNode}-panel`, "panel--button-notes", `${mainNode}-panel--button-notes`);
    this.notesButton.innerHTML = "Notes";
    this.eraseButton =
      this.createDiv(`.${mainNode}-panel`, "panel--button-erase", `${mainNode}-panel--button-erase`);
    this.eraseButton.innerHTML = "Erase";
  }
  //Method for creating, appending and giving class name
  createDiv(appendTo, classNameOne = "default", classNameTwo = "default") {
    this.currentElement = document.createElement("div");
    this.currentParentElement = appendTo;

    //We cant query select objects
    if (typeof appendTo == "string") {
      this.currentParentElement = document.querySelector(appendTo);
    }

    this.currentElement.classList.add(classNameOne);
    this.currentElement.classList.add(classNameTwo);
    this.currentParentElement.appendChild(this.currentElement);
    return this.currentElement;
  }
}
