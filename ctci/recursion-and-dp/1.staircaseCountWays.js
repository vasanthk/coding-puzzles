/**
 * A child is running up a staircase with n steps, and can hop either 1 step,
 * 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
 *
 * Hint: Dynamic Programming
 *
 * Runtime: O(n)
 *
 * @Reference:
 * https://github.com/splashinn/javascript-algos-data-structures/blob/master/src/staircase.js
 */

var stepCache = [];

function staircaseCountWays(n) {
  if (n < 0) {
    return 0;
  }

  // TODO: Check why for 0 steps we return 1 way?? Doesn't that mean I don't need to move at all?
  // Am I missing something obvious here?
  // Oh, wait -- Since when n = 1, we check for staircaseCountWays(n - 1) -- n-1 = 0, and there is 1 way to get to 1st step.
  // Got it.
  if (n === 0) {
    return 1;
  }

  if (stepCache[n]) {
    return stepCache[n];
  } else {
    stepCache[n] = staircaseCountWays(n - 1) + staircaseCountWays(n - 2) + staircaseCountWays(n - 3);

    return stepCache[n];
  }
}

// OUTPUT:
//
// staircaseCountWays(7)
// 44