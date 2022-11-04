
const grid = [
  [0, 0, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 4, 0, 2],
  [0, 6, 0, 5, 0, 0, 3, 0, 7],
  [0, 9, 0, 0, 5, 0, 0, 2, 0],
  [2, 0, 0, 6, 0, 0, 0, 0, 0],
  [0, 0, 3, 4, 0, 2, 1, 0, 0],
  [5, 3, 1, 2, 0, 6, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 8, 0, 7, 0]
];

const newGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 8, 0, 0, 0]
];

function legal(x, y, n) {
  for (let i = 0; i < 9; i++) {

    if (grid[x][i] == n) return false;
    if (grid[i][y] == n) return false;

  }

  x0 = Math.floor((x / 3)) * 3;
  y0 = Math.floor((y / 3)) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[x0 + i][y0 + j] == n) return false;
    }
  }

  return true;
}

function backTrackerAlgo() {
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (grid[x][y] == 0) {
        for (let n = 1; n < 10; n++) {
          if (legal(x, y, n)) {
            grid[x][y] = n;
            solve();
            grid[x][y] = 0;
          }
        }

        return;

      }

    }

  }
  //console.log(grid.join('\n'));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      newGrid[i][j] = grid[i][j];
    }
  }
}

function solve() {
  backTrackerAlgo();
  return newGrid;
}
backTrackerAlgo();

console.log(newGrid.join('\n'))
