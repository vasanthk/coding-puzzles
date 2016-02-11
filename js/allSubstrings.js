/**
 * Return all substrings of a string
 *
 * Hint: Use Dynamic Programming
 */

function subStrings(str) {
  if(str.length === 0) {
    return [''];
  }

  var first = str[0];
  var rest = str.slice(1);

  var subStringsOfRest = subStrings(rest);

  for(var i = 0; i < subStringsOfRest.length; i++) {
    subStringsOfRest.push(first + subStringsOfRest[i]);
  }

  return subStringsOfRest;
}