/**
 * Fibonacci Sequence
 *
 * Hint:
 * Dynamic Programming
 *
 * @Reference:
 * http://www.graemeboy.com/fibonacci-sequence
 */

// Keeping Track of the Series in an Array
var fibArr = function(n) {
  fibArr.cache = fibArr.cache || [0, 1];

  // Check if there is a value for the current array index.
  if(typeof fibArr.cache[n] === 'undefined') {
    fibArr.cache[n] = fibArr(n-1) + fibArr(n-2);
  }
  return fibArr.cache[n];
};


// OUTPUT
//
// fibN = fibArr(13)
// 233
//
// fibArr.cache
// [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ]


