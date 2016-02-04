/**
 * Reverse Words In A String Using JavaScript
 *
 * @Reference:
 * https://blog.nraboy.com/2015/02/reverse-words-string-using-javascript/
 */

function reverseWords(str) {
  var result = "";
  var wordArray = str.split(" ");
  for (var i = wordArray.length - 1; i >= 0; i--) {
    result += wordArray[i] + " ";
  }
  return result.trim(); // To remove trailing spaces.
}

// If we had to write out own split() function and not use the in-built one.
String.prototype.splitStr = function (delimiter) {
  var stringArray = [];
  var tempStr = "";
  for (var i = 0; i < this.length; i++) {
    if (this.charAt(i) === delimiter) {
      stringArray.push(tempStr);
      tempStr = "";
    } else {
      tempStr += this.charAt(i);
    }
  }
  if (tempStr !== "") {
    stringArray.push(tempStr);
  }
  return stringArray;
};