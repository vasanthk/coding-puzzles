/**
 * Write a method to compute all permutations of a string
 *
 * Hint:
 * Dynamic Programming. The solution for this problem is usually recursive.
 *
 * Time Complexity: O(n!) -- since there are n! permutations
 *
 * @Reference:
 * http://www.graemeboy.com/string-permutations
 * https://www.mathsisfun.com/combinatorics/combinations-permutations.html
 * https://github.com/vasanthk/cpz/blob/master/js/stringPermutations.js
 */

// IMPLEMENTATION 1
function permute(str) {
  if (str.length <= 1) {
    return str;
  }

  var permuteNMinus1 = permute(str.slice(1));
  var permutations = [];

  for (var j = 0; j < permuteNMinus1.length; j++) {
    var permutation = permuteNMinus1[j];
    for (var i = 0; i <= permutation.length; i++) {
      // The idea is to add the new letter str[0] to every position in all permutations of permuteNMinus1
      // Check page 324 in book for more info
      permutations.push(permutation.slice(0, i) + str[0] + permutation.slice(i));
    }
  }

  return permutations;
}

// OUTPUT
// permute('dog')
// ["dog", "odg", "ogd", "dgo", "gdo", "god"]


// IMPLEMENTATION 2
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


