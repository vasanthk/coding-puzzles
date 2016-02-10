/**
 * Given an array of numbers - find the unrepeated number.
 *
 * @Reference:
 *
 */

// Find the one unrepeated number in an array of numbers that repeat even number of times

function findUnrepeatedNumber(arr) {
  return arr.reduce(function(num, result) {
    // XOR all the numbers to return the non repeated number.
    return num^result;
  })
}