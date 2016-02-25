/**
 Write a function to find all the combinations of three numbers that sum to zero

 Sample input:
 [2, 3, 1, -2, -1, 0, 2, -3, 0]

 Sample output:
 2, -2, 0
 1, -1, 0
 3, -2, -1
 3, 0, -3
 3, 0, -3

 */

function subsetSum(numbers, target, partial) {
  var partialSum, num, remaining;

  partial = partial || [];

  // sum partial
  partialSum = partial.reduce(function (sum, currVal) {
    return sum + currVal;
  }, 0);

  // check if the partial sum is equals to target
  if (partialSum === target) {
    console.log("%s=%s", partial.join("+"), target)
    return;
  }

  if (partialSum > target) {
    return;  // if we reach the number why bother to continue
  }

  for (var i = 0; i < numbers.length; i++) {
    num = numbers[i];
    remaining = numbers.slice(i + 1);
    subsetSum(remaining, target, partial.concat(num));
  }
}

subsetSum([3, 9, 8, 4, 5, 7, 10], 15);

// output:
// 3+8+4=15
// 3+5+7=15
// 8+7=15
// 5+10=15