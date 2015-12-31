/**
 * Implement a function to find the square root of a number, without using math.sqrt();
 *
 * @Reference:
 * https://github.com/EvanSkeete/front-end-interviews/blob/master/challenges.js#L143
 */

function sqrt(n) {
  var start = 0;
  var end = n / 2;
  var epsilon = 0.00001;

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