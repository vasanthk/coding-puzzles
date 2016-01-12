/*
 Given an image represented by an NxN matrix, where each pixel in the
 image is 4 bytes, write a method to rotate the image by 90 degrees.
 Can you do this in place?

 Pg 179

 Simplified example:
 [                           [
 [a1, a2, a3, a4],           [1,2,3,4],
 [b1, b2, b3, b4],           [2,3,4,1],
 [c1, c2, c3, c4],           [3,4,1,2],
 [d1, d2, d3, d4],           [4,1,2,3]
 ]                           ]
 =>
 [                           [
 [d1, c1, b1, a1]            [4,3,2,1],
 [d2, c2, b2, a2]            [1,4,3,2],
 [d3, c3, b3, a3]            [2,1,4,3],
 [d4, c4, b4, a4]            [3,2,1,4]
 ]                           ]

 @Reference:
 https://github.com/sdepold/algodast/blob/e994b0f894c68e5d30d023b260a25e5c6aba7f7f/src/chapter-1-6.js
 https://github.com/JuliaRechkunova/just-another-algorithms/blob/0192d08bafe45c8eb75697d1b0532b1b93542ae1/src/arrays/rotation.js
 */

// In-place rotation
function rotateMatrixBy90(matrix) {
  var n = matrix.length,
    layer,
    first,
    last,
    top,
    i;

  if (!n) {
    return matrix;
  }

  for (layer = 0; layer < n / 2; layer++) {
    first = layer;
    last = n - layer - 1;
    for (i = first; i < last; i++) {
      top = matrix[first][first + i];
      matrix[first][first + i] = matrix[last - i][first];
      matrix[last - i][first] = matrix[last][last - i];
      matrix[last][last - i] = matrix[first + i][last];
      matrix[first + i][last] = top;
    }
  }

  return matrix;
}


// With new array [Need smore space]
function rotateMatrixBy90(matrix) {
  var result = [],
    value = null;

  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix.length; col++) {
      value = matrix[row][col];
      result[col] = result[col] || [];

      result[col][matrix.length - row - 1] = value;
    }
  }
  return result;
}