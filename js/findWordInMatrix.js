/*
 Given a dictionary, and a matrix of letters, find all the words in the matrix
 that are in the dictionary. (Going across, down or diagonally)

 @Reference:
 https://github.com/jimwhimpey/programming-excerises/blob/master/word-find.js
 */

var matrix = [
  ['a', 'd', 'o', 'g'],
  ['c', 'f', 't', 'c'],
  ['a', 'j', 'a', 'a'],
  ['t', 'd', 'o', 't']
];

// Words to find
var words = [
  'dog',
  'cat',
  'fat'
];

var horizontalStr = (function () {
  var tempArr = [];
  for (var i = 0; i < matrix.length; i++) {
    tempArr.push(matrix[i].join(''));
  }
  return tempArr;
})();
console.log('Horizontal Strings', horizontalStr);


var verticalStr = (function () {
  var tempArr = [];
  var tempStr = '';
  for (var j = 0; j < matrix.length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      tempStr += matrix[i][j]
    }
    tempArr.push(tempStr);
    tempStr = '';
  }
  return tempArr;
})();

console.log('Vertical Strings', verticalStr);

// The below function can be optimized to not include paths that have already been traversed.
var diagonalStr = (function () {
  var tempArr = [];
  var tempStr = '';
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      for (var x = i, y = j; x < matrix.length && y < matrix.length; x++, y++) {
        tempStr += matrix[x][y];
      }
      tempArr.push(tempStr);
      tempStr = '';
    }
  }
  return tempArr;
})();

console.log('Diagonal Strings', diagonalStr);

var finalArr = [].concat(horizontalStr, verticalStr, diagonalStr);
console.log('All Strings', finalArr);

var foundWords = [];
wordLoop:
  for (var i = 0; i < words.length; i++) {
    finalArrLoop:
      for (var j = 0; j < finalArr.length; j++) {
        if (finalArr[j].indexOf(words[i]) !== -1) {
          foundWords.push(words[i]);
          break finalArrLoop;
        }
      }
  }

console.log('Words Found', foundWords);
