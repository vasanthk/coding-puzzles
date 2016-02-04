/**
 * Find LCA between two nodes in binary tree
 *
 * Hint: Break it down to sub-problems (Dynamic Programming)
 *
 * LCA for Binary Search Tree: http://articles.leetcode.com/2011/07/lowest-common-ancestor-of-a-binary-search-tree.html
 * LCA for Binary Tree: http://articles.leetcode.com/2011/07/lowest-common-ancestor-of-a-binary-tree-part-i.html
 */

function findLCATreeNodes(node1, node2, tree) {
  if (node1.val < tree.val && node2.val < tree.val) {
    // If both nodes lie in left subtree then
    // LCA is in left subtree
    return findLCATreeNodes(node1, node2, tree.left);
  } else if (node1.val > tree.val && node2.val > tree.val) {
    // If both nodes lie in right subtree then
    // LCA is in right subtree
    return findLCATreeNodes(node1, node2, tree.right);
  } else {
    return tree.val;
  }
}