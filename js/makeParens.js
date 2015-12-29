/**
 * Implement an algorithm to print all valid (e.g., properly opened and closed)
 * combinations of n-pairs of parentheses.
 *
 * n = 0 -> ''
 * n = 1 -> ()
 * n = 2 -> (()), ()()
 * n = 3 -> ()(()), (()()), ((())), ()()(), (())(), ()()()
 *
 * @Reference:
 * https://github.com/EvanSkeete/front-end-interviews/blob/master/challenges.js#L81
 */

function makeParens(n) {
  var result = [];
  if (n === 1) {
    result = ['()'];
  } else if (n <= 0) {
    result = [''];
  } else {
    makeParens(n - 1).forEach(function (combination, i) {
      result.push(combination + '()');
      if (combination + '()' !== '()' + combination) {
        result.push('()' + combination);
      }
      result.push('(' + combination + ')');
    });
  }
  return result;
}

// OUTPUT
//
// console.log(makeParens(3));
//
// ["()()()", "(()())", "(())()", "()(())", "((()))"]