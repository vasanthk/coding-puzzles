/**
 * You have n - 1 numbers from 1 to n. Your task is to find the missing number.
 *
 * I.e.
 * n = 5
 * v = [4, 2, 5, 1]
 * The result is 3.
 *
 * @Reference:
 * http://stackoverflow.com/questions/3492302/easy-interview-question-got-harder-given-numbers-1-100-find-the-missing-numbe
 */

function missingOneNumber(arr, n) {
  var sum = arr.reduce(function (sum, currNum) {
    return sum + currNum;
  }, 0);

  var actualSum = n * (n + 1) / 2;
  var missingNum = actualSum - sum;

  return missingNum;
}

// Note: If 2 numbers are missing (Hint: Some XOR magic)
// http://stackoverflow.com/questions/20026243/find-2-missing-numbers-in-an-array-of-integers-with-two-missing-values

// Alternative method (Mathematical)
function missingTwoNumbers(arr, n) {
  var a, b;
  var sum = arr.reduce(function (sum, currNum) {
    return sum + currNum;
  }, 0);

  var sumSquared = arr.reduce(function (sum, currNum) {
    return sum + (currNum * currNum);
  }, 0);

  var actualSum = n * (n + 1) / 2;
  var missingNumsSum = actualSum - sum; // a + b

  var actualSumSquared = 0;
  var i = 1;
  while (i <= n) {
    actualSumSquared += (i * i);
    i++;
  }
  var missingNumsSumSquared = actualSumSquared - sumSquared;  // a^2 + b^2

  // Now lets form a quadratic equation.
  var temp = (missingNumsSum * missingNumsSum) - missingNumsSumSquared;  // temp = (a + b)^2 - (a^2 + b^2) ~~~ 2ab
  var numProduct = temp / 2;  // Since 2ab = temp

  // So we now have values for ab and a + b
  // b = missingNumsSum - a
  // numProduct = a * (missingNumSum - a)
  // (ie) a^2 - (missingNumSum * a) + numProduct = 0;
  //
  // Now the formula is
  // x = (-b + sqrt(b^2 - 4ac))/2a
  //
  // Once you get a, b = missingNumsSum - a.


  a = (missingNumsSum + Math.sqrt((missingNumsSum * missingNumsSum) - (4 * numProduct))) / 2
  b = missingNumsSum - a;

  console.log('Missing numbers: ' + a + ', ' + b);
}

// OUTPUT:
// missingTwoNumbers(arr, 5)
// Missing numbers: 4, 3