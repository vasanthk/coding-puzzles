/**
 * Factorial of a number N
 *
 * @Reference:
 * http://stackoverflow.com/a/4438167/1672655
 */

// Using recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

// console.log(factorial(parseInt(number, 10)));
// 3628800


// Iterative solution
function fact(x) {
  if (x == 0) {
    return 1;
  }
  if (x < 0) {
    return undefined;
  }
  for (var i = x; --i;) {
    x *= i;
  }
  return x;
}