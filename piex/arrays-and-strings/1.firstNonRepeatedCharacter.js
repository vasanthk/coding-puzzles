/**
 * Find the first non-repeated character in a string.
 *
 * Pg 73
 *
 * Time Complexity: O(n)
 */

function firstNonRepeatedCharacter(str) {
  var hashTable = {};
  var i;

  for (i = 0; i < str.length; i++) {
    if (hashTable[str[i]]) {
      hashTable[str[i]] = 'seenMoreThanOnce';
    } else {
      hashTable[str[i]] = 'seenOnce';
    }
  }

  for (i = 0; i < str.length; i++) {
    if (hashTable[str[i]] === 'seenOnce') {
      return str[i];
    }
  }
  return null;
}

// OUTPUT
//
// console.log(firstNonRepeatedCharacter("teeter")); // Output 'r'
// console.log(firstNonRepeatedCharacter("aabbcddee")); // Output 'c'