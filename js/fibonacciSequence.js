/**
 * Fibonacci Sequence
 *
 * Hint:
 * Dynamic Programming
 *
 * @Reference:
 * http://www.graemeboy.com/fibonacci-sequence
 *
 * In Detail explantion of how to go about solving it in interviews
 * http://programmers.stackexchange.com/a/251108/62739
 */

/**
 * Keeping Track of the Series in an Array
 * - Recursion with memoization
 *
 * Runtime: O(n)
 *
 * TOP DOWN APPROACH
 */
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


/**
 * By avoiding recursion and using a for loop instead.
 *
 * Advantages:
 * - Utilizes cache more effectively
 * - Simpler call stack and lot easier to reason about
 *
 * BOTTOM UP APPROACH
 */

function fib(n) {
  var seq = [0, 1];
  if(typeof seq[n] === 'undefined') {
    for(var i=2; i <= n; i++) {
      seq[i] = seq[i-1] + seq[i-2];
    }
  }
  return seq[n];
}

// OUTPUT
//
// fibN = fib(13)
// 233
//
