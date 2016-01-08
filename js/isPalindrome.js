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


// With recursion
function recursiveIsPalindrome(str) {
  if(str.length === 0) {
    return true;
  } else {
    return (str[0] === str[str.length - 1]) && recursiveIsPalindrome(str.slice(1, str.length - 1))
  }
}
