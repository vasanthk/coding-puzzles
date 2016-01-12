/**
 * Write two conversion routines.
 * First one converts a string to a signed integer and the second one converts an integer into a string.
 *
 * Pg. 83
 */

function stringIntegerConversion(str) {
  return parseInt(str, 10);
}

function integerStringConversion(num) {
  return num.toString();

  // OR
  // return a + '';
}