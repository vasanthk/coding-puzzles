/**
 * Given two strings, return true if they are one edit away from each other,else return false.
 An edit is insert/replace/delete a character.
 Ex. {"abc","ab"}->true, {"abc","adc"}->true, {"abc","cab"}->false

 @Reference:
 http://stackoverflow.com/a/32431621/1672655
 */

function isOneEditDistance(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;

  // CASE 1: If the length difference of the strings is greater than 1 -- return false.
  // Also, if both strings are identical -- return false.
  if (Math.abs(len1 - len2) > 1 || str1 === str2) {
    return false;
  }

  // CASE 2: Check for total char differences
  var i = 0;
  var j = 0;
  var diff = 0;

  while (i < len1 && j < len2) {
    // If there is a char difference between the 2 strings for the curr index.
    if (str1.charAt(i) !== str2.charAt(j)) {
      diff++;
      if (len1 > len2) {
        // Could be that a new character was inserted, so check next char.
        i++;
      } else if (len2 > len1) {
        // Could be that a new character was inserted, so check next char.
        j++;
      } else {
        // If both strings are of same length -- increment both index pointers.
        i++;
        j++;
      }
    } else {
      // If no difference in characters - move to next char.
      i++;
      j++;
    }

    if (diff > 1) {
      // More than one character change - So edit distance > 1
      return false;
    }
  }

  // CASE 3:  If the length of the string is not same. ex. "abc" and "abde" are not one edit distance.
  if (diff === 1 && len1 !== len2 && (i !== len1 || j !== len2)) {
    return false;
  }
  return true;
}