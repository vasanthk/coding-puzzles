/**
 * Write an algorithm to print all ways of arranging eight queens on a chess board so that none of them share the same row, column or diagonal.
 *
 * Info: There are 92 distinct solutions.
 * The resulting array has the position index of the queen in each column (0-7)
 *
 */

var GRID_SIZE, counter = 0;

function placeQueens(row, columns, results) {
  if (row === GRID_SIZE) { // Found valid placement
    // console.log('found a solution', columns.join(', '));
    results.push(columns.slice());
  } else {
    for (var col = 0; col < GRID_SIZE; col++) {
      if (checkValid(columns, row, col)) {
        columns[row] = col; // Place Queen
        placeQueens(row + 1, columns, results);
      }
    }
  }
}

// Check if (row1, column1) is a valid spot for a queen by checking if there is a
// queen in the same column or diagonal. We don't need to check it for queens in
// the same row because the calling placeQueen only attempts to place one queen at
// a time. We know this row is empty.
function checkValid(columns, row1, column1) {
  // console.log(++counter, '. checking ', row1, column1);
  for (var row2 = 0; row2 < row1; row2++) {

    var column2 = columns[row2];

    // Check if (row2, column2) invalidates (row1, column1) as a queen spot

    // Check if rows have a queen in the same column
    if (column1 === column2) {
      return false;
    }

    // Check diagonals: if the distance between the columns equals the distance
    // between the row, then they're in the same diagonal.
    var columnDistance = Math.abs(column2 - column1);
    // row1 > row2, so no need for abs
    var rowDistance = row1 - row2;
    if (columnDistance === rowDistance) {
      return false;
    }
  }
  // console.log('this is valid:', row1, column1);
  return true;
}

function placeQueensInit(n) {
  GRID_SIZE = n;
  var columns = Array.apply(null, Array(n)).map(Number.prototype.valueOf, -1);
  var results = [];
  placeQueens(0, columns, results);
  console.log(results.join('\n'));
  console.log(results.length);
}

placeQueensInit(8);