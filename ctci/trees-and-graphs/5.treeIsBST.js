/**
 * Implement a function to check if a binary tree is a binary search tree.
 *
 * Hint:
 * 1st Method: Just check all nodes to see if left < root < right
 * 2nd Method: Do inorder traversal and push values to an array. Then, check if they are in ASC order
 *
 * @Reference:
 * https:// github.com/Satnam14/cracking_the_coding_interview.js/blob/master/chapter4_Trees_and_Graphs/q5_is_bst.js
 */

function isBST(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return true;
  }

  if (root.left !== null && root.left.value > root.value) {
    return false;
  }

  if (root.right !== null && root.right.value <= root.value) {
    return false;
  }

  return isBST(root.left) && isBST(root.right);
}