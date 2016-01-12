/**
 * Remove specified characters form a string
 *
 * Pg 76
 *
 * Time Complexity: O(n)
 */

function removeSpecifiedCharacters(str, remove) {
  var temp = '';
  for (var i = 0; i < str.length; i++) {
    if (remove.indexOf(str.charAt(i)) === -1) {
      temp = temp + str.charAt(i);
    }
  }
  return temp;
}

// OUTPUT:
// console.log(remove_chars('hello', 'eo'));
// hll
//
// console.log(remove_chars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
// Bttl f th Vwls: Hw vs. Grzny
