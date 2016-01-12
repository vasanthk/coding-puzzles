/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
 *
 * Pg 180
 *
 * @Reference:
 * https://github.com/JuliaRechkunova/just-another-algorithms/blob/0192d08bafe45c8eb75697d1b0532b1b93542ae1/src/arrays/set-zero.js
 */

function setMatrixRowColZero(matrix) {
  var m = matrix.length,
    n = (m > 0) ? matrix[0].length : 0;
  if (!m || !n) {
    return matrix;
  }

  var row = {},
    column = {},
    i, j;

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (row[i] || column[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}