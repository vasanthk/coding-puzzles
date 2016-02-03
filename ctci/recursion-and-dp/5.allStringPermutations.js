/**
 * Write a method to compute all permutations of a string
 *
 * Hint:
 * Dynamic Programming. The solution for this problem is usually recursive.
 *
 * Time Complexity: O(n!)
 *
 * @Reference:
 * http://www.graemeboy.com/string-permutations
 * https://www.mathsisfun.com/combinatorics/combinations-permutations.html
 * https://github.com/vasanthk/cpz/blob/master/js/stringPermutations.js
 */

function stringPerm(rest, soFar) {
  var next;
  var remaining;

  if (!soFar) {
    soFar = '';
  }

  if (rest == '') {
    console.log(soFar);
  } else {
    for (var i = 0; i < rest.length; i++) {
      remaining = rest.substr(0, i) + rest.substr(i + 1, rest.length - 1);
      next = soFar + rest[i];

      stringPerm(remaining, next);
    }
  }
}

// OUTPUT
// console.log(stringPerm('dog'))
// dog
// dgo
// odg
// ogd
// gdo
// god

