/**
 * Implement a method to perfomr basic string compression using the count of repeated characters.
 * eg. aabcccccaaa would become a2b1c5a3
 *
 * Pg 176
 */

function compressRepeatedChars(str) {
  var compressedStr = '';
  var prev = str[0];
  var count = 1;
  for (var i = 1; i < str.length; i++) {
    if (str[i] === prev) {
      count++;
    } else {
      compressedStr += prev + '' + count;
      prev = str[i];
      count = 1;
    }
  }
  return compressedStr + prev + count;
}