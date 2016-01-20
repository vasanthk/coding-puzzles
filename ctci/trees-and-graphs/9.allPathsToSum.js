/**
 * You are given a binary tree (not necessarily BST) in which each node contains a value.
 * Design an algorithm to print all paths which sum up to that value.
 * Note that it can be any path in the tree - it does not have to start at the root.
 *
 * Hint: Check CTCI for more info.
 *
 * Time Complexity: O(nlogn)
 * Space Complexity: O(nlogn)
 */

function findSumFromNode(node, sum) {
  findSum(node, sum, [], 0);
}

function findSum(node, sum, path, level) {
  if (node === null) {
    return;
  }

  // Insert current node into path
  path[level] = node.value;

  // Look for paths with a sum that ends at this node.
  var t = 0;
  for (var i = level; i >= 0; i--) {
    t += path[i];
    if (t === sum) {
      print(path, i, level);
    }
  }

  // Search nodes beneath this one.
  findSum(node.left, sum, path, level + 1);
  findSum(node.right, sum, path, level + 1);

  // Remove current node from path.
  path[level] = undefined;
}
function print(path, start, end) {
  for (var i = start; i <= end; i++) {
    console.log(path[i] + ' ');
  }
}