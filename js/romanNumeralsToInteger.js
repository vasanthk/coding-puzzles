/**
 * Convert a roman numeral string to an integer
 *
 */

function convertRoman(roman) {
  var key = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  var result = 0;
  var romanArray = roman.split('');
  var prevVal = romanArray[0];

  romanArray.forEach(function (char) {
    var val = key[char];

    result += (prevVal < val) ? val - 2 * prevVal : val;
    // Note: Use case for (val - 2 * prevVal)
    // http://inromannumerals.com/what-is/1544-in-roman-numerals/

    prevVal = val;
  });

  return result;
}


// OUTPUT:
//
// console.log(convertRoman('MDXLIV'))
// 1544
//
// console.log(convertRoman('MDLVI'))
// 1556
//
