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
  for (i = 0; i < input.length; i++) {     //   loop over all elements
    ch = input.splice(i, 1)[0];            //1. pull out each element in turn
    usedChars.push(ch);                    //   push this element
    if (input.length == 0) {               //2. if input is empty, we pushed every element
      permArr.push(usedChars.slice());     //   so add it as a permutation
    }
    permute(input);                        //3. compute the permutation of the smaller array
    input.splice(i, 0, ch);                //4. add the original element to the beginning
                                           //   making input the same size as when we started
                                           //   but in a different order
    usedChars.pop();                       //5. remove the element we pushed
  }
  return permArr;                          //return, but this only matters in the last call
}

console.log(permute([5, 3, 7]));
