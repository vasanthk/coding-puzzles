/**
 * Find out if a string is a palindrome
 */

function isPalindrome(str) {
  var start = 0;
  var end = str.length -1;

  while(str[start] === str[end]) {
    if(start >= end) {
      return true;
    }
    start++;
    end--;
  }

  return false;
}