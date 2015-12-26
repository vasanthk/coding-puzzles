/**
 * A child is running up a staircase with n steps, and can hop either 1 step, 2 steps,
 * or 3 steps at a time. Implement a method to count how many possible ways the
 * child can run up the stairs.
 *
 * Hint: Similar to handling Fibonacci series using recursion.
 *
 * @Reference:
 * http://www.geeksforgeeks.org/count-ways-reach-nth-stair/
 */

var memoizedSteps = [0, 1];

function countSteps(numStairs) {
  if (numStairs <= 0) {
    return 0;
  }

  if (typeof memoizedSteps[numStairs] !== 'number') {
    memoizedSteps[numStairs] = countSteps(numStairs - 3) + countSteps(numStairs - 2) + countSteps(numStairs - 1);
  }

  return memoizedSteps[numStairs]
}

// USAGE
// console.log(countSteps(7));  // 24