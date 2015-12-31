/**
 * Implement a function to find the square root of a number, without using math.sqrt();
 *
 * Hint: Binary Search
 *
 * @Reference:
 * https://github.com/EvanSkeete/front-end-interviews/blob/master/challenges.js#L143
 * http://www.geeksforgeeks.org/square-root-of-an-integer/
 *
 * Time Complexity: O(log n)
 */

function sqrt(n) {
  var start = 0;
  var end = n / 2;
  var epsilon = 0.00001;  // This is the precision to which we want the returned value to be accurate.

  var choice = (end - start) / 2;
  var result = choice * choice;

  while (Math.abs(result - n) > epsilon) {
    if (result > n) {
      end = choice;
    } else {
      start = choice;
    }

    choice = start + (end - start) / 2;
    result = choice * choice;
  }
  return choice.toFixed(5);
}