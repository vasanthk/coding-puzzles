/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 *
 * Time Complexity: O(n)
 * Space complexity: O(1)
 *
 * Pg: 172
 */

function checkUniqueCharsInString(str) {
  var charset = [];
  // Clarify if ASCII char set -- It has only 256 chars
  if (str.length > 256) {
    return false;
  } else {
    for (var i = 0; i < str.length; i++) {
      if (charset[str[i]]) {
        return false;
      }
      charset[str[i]] = true;
    }
    return true;
  }
}
