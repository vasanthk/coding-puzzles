/**
 * Given a sorted (increasing order) array with unique integer elements,
 * write an algorithm to create a binary search tree with minimal height.
 *
 * Time Complexity: O(n)
 *
 * @Reference:
 * https://github.com/JuliaRechkunova/just-another-algorithms/blob/master/src/trees/min-bst-from-sorted-array.js
 * http://www.geeksforgeeks.org/sorted-array-to-balanced-bst/
 */

// Typical Binary tree node.
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function makeMinBSTFromSortedArray(arr) {
  return makeMinBST(arr, 0, arr.length - 1);
}

function makeMinBST(arr, start, end) {
  if (end < start) {
    return null;
  }

  var middle = Math.floor((start + end) / 2);

  var treeNode = new Node(arr[middle]);
  treeNode.left = makeMinBSTFromSortedArray(arr, start, middle - 1);
  treeNode.right = makeMinBSTFromSortedArray(arr, middle + 1, right);

  return treeNode;
}