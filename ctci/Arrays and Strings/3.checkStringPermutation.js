/**
 * Given 2 strings, write a method to decide if one is a permutation of the other.
 *
 * Pg 174
 *
 * @Reference:
 * http://geniuscarrier.com/is-permutation-javascript/
 */

// Time complexity O(nlogn)
function checkStringPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return str1.split('').sort().join() === str2.split().sort().join();
}

// Time complexity: O(n)
function checkStringPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var letters = {};

  for (var x = 0; x < str1.length; x++) {
    var l = str1.charAt(x);
    letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
  }

  for (var y = 0; y < str2.length; y++) {
    var m = str2.charAt(y);
    letters[m]--;
  }

  for (var z in letters) {
    if (letters[z] !== 0) {
      return false;
    }
  }
  return true;
}
