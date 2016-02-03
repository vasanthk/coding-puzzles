/**
 *
 * @Reference:
 * https://github.com/weihotline/CrackingTheCodingInterviewJavaScript/blob/master/08_chp8/03_subsets.js
 */

function subsets(array) {
  if (array.length === 0) {
    return [[]]; // empty set
  }

  var oldSet = subsets(array.slice(1));
  var newSet = oldSet.map(function (sub) {
    var newSub = sub.concat();
    newSub.push(array[0]);
    return newSub;
  });

  return oldSet.concat(newSet);
}