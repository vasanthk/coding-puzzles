/**
 * Given an array of numbers - return the combinations of it.
 *
 * @Reference:
 * http://stackoverflow.com/a/4061198/1672655
 * https://gist.github.com/axelpale/3118596
 *
 */

// Returns all combinations
function combinations(arr, active) {
  if (!active) {
    active = '';
  }

  if (arr.length == 0) {
    console.log(active);
  } else {
    combinations(arr.slice(1), active + arr[0]);
    // For string combinations
    // combinations(rest.substring(1, rest.length), active + rest.charAt(0))

    combinations(arr.slice(1), active);
    // For string combinations
    // combinations(rest.substring(1, rest.length), active)
  }
}

// console.log(combinations([1,2,3]));

// Returns all combinations of length `n`
function combinations(numArr, choose) {
  var res = [];

  function inner(start, tempChoose) {
    if (tempChoose === 0) {
      console.log(res);
    } else {
      for (var i = start; i <= numArr.length - tempChoose; i++) {
        res.push(numArr[i]);
        inner(i + 1, tempChoose - 1);
        res.pop();
      }
    }
  }

  inner(0, choose);
}

// console.log(combinations([1, 3, 5, 7, 9, 11], 3));