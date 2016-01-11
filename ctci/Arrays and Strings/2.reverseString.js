/**
 * Reversing a string
 *
 * Pg 173
 *
 * @Reference:
 * http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
 * http://ilikekillnerds.com/2015/07/reversing-a-string-in-javascript-3-different-ways/
 * ES6: http://stackoverflow.com/a/34445777/1672655
 */

// Basic for loop
function reverseString(str) {
  var op = '';
  for (var i = str.length - 1; i >= 0; i--) {
    op += str[i];
  }
  return op;
}

// Using inbuilt fn
function reverseString(str) {
  return str.split('').reverse().join('');
}

// ES6
function reverseString(str) {
  return [...str].reverse().join('');
}