/**
 * Return all permutations of numeric array
 *
 * @Reference:
 * http://stackoverflow.com/a/9960925/1672655
 *
 * Explanation:
 * http://stackoverflow.com/questions/21744120/trying-to-understand-recursion-within-for-loops-in-javascript/21745151#21745151
 */

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
}

console.log(permute([5, 3, 7]));
