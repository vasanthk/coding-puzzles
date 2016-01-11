/**
 * Assume you have a method isSubstring
 * which checks if one word is a substring of another.
 * Given two strings, s1 and s2,
 * write code to check
 * if s2 is a rotation of s1
 * using only one call to isSubstring
 * (e.g.,"waterbottle" is a rotation of "erbottlewat").
 *
 * Pg: 181
 *
 * @Reference:
 * https://github.com/JuliaRechkunova/just-another-algorithms/blob/0192d08bafe45c8eb75697d1b0532b1b93542ae1/src/strings/is-rotation.js
 */

function isSubstring(substring, instring) {
  return (instring.indexOf(substring) !== -1);

  // OR
  // return (instring.search(substring) >= 0);
}

function isRotation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  var xyxy = string1 + string1;
  return isSubstring(string2, xyxy);
}