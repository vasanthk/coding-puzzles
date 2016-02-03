/**
 * Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents) and pennies (1 cent),
 * write code to calculate the number of ways of representing n cents
 *
 * @Reference:
 * https://github.com/chihungyu1116/interview_sols_javascript/blob/master/algorithm/number_of_ways_to_represent_n_cents.js
 */


/*
 n cents => x*25cents + y*10cents + z*5cents + w*1cent;
 order doesn't matter
 */

function getChangeHelper(n, denom) {
  if (n < 0) return 0;

  var next_denom = 0;
  var ways = 0;

  if (denom === 25) {
    next_denom = 10;
  } else if (denom === 10) {
    next_denom = 5;
  } else if (denom === 5) {
    next_denom = 1;
  } else if (denom === 1) {
    return 1;
  }
  for (var i = 0; (i * denom) <= n; i++) {
    ways += getChangeHelper(n - (i * denom), next_denom);
  }
  return ways;
}

function getChange(value) {
  return getChangeHelper(value, 25);
}

console.log(getChange(100));