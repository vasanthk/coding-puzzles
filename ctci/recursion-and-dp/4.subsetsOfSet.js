/**
 * Write a method to return all subsets of a set.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(2^n)
 *
 * @Reference:
 * https://github.com/weihotline/CrackingTheCodingInterviewJavaScript/blob/master/08_chp8/03_subsets.js
 */

function subsets(array) {
  if (array.length === 0) {
    return [[]]; // empty set
  }

  // Main Logic: (Pg 322 in book)
  // subset(n) = subset(n-1) + Each array in subset(n-1) with current new element.
  var oldSet = subsets(array.slice(1));
  var newSet = oldSet.map(function (sub) {
    var newSub = sub.concat();
    newSub.push(array[0]);
    return newSub;
  });

  return oldSet.concat(newSet);
}