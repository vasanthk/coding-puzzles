/**
 * Given an array of numbers - return the combinations of it.
 *
 * @Reference:
 * http://stackoverflow.com/a/4061198/1672655
 */

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