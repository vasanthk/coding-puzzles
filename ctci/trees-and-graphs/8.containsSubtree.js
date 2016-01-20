/**
 * An algorithm to decide if smallTree is a subtree of largeTree
 *
 * Time complexity: O(nm) worst case
 * Space complexity: O(logn + log m)
 *
 * @Reference:
 * https://github.com/weihotline/CrackingTheCodingInterviewJavaScript/blob/master/04_chp4/06_contains_tree.js
 */


function containsTree(largeTreeNode, smallTreeNode) {
  if (smallTreeNode === null) {
    return true; // the emptry tree is a subtree of all tree
  } else {
    return subTree(largeTreeNode, smallTreeNode);
  }
}

function subTree(largeTreeNode, smallTreeNode) {
  if (largeTreeNode === null) {
    return false; // large tree is empty but small tree is still not found
  }

  // data matches, possible matched tree
  if (largeTreeNode.data === smallTreeNode.data) {
    if (matchTree(largeTreeNode, smallTreeNode)) {
      return true;
    }
  }

  // shrink the tree and try
  return (subTree(largeTreeNode.left, smallTreeNode) ||
  subTree(largeTreeNode.right, smallTreeNode));
}

function matchTree(largeTreeNode, smallTreeNode) {
  // both trees hit its end: true
  if (largeTreeNode === null && smallTreeNode === null) {
    return true;
  }

  // one tree hits its end: false
  if (largeTreeNode === null || smallTreeNode === null) {
    return false;
  }

  // data doesn't match: false
  if (largeTreeNode.data !== smallTreeNode.data) {
    return false;
  }

  // try left and right
  return (matchTree(largeTreeNode.left, smallTreeNode.left) ||
  matchTree(largeTreeNode.right, smallTreeNode.right));
}