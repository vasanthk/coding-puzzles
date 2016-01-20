/**
 * Find the next node (ie in order successor) of a given node in a binary search tree
 *
 * @Reference:
 * https://github.com/weihotline/CrackingTheCodingInterviewJavaScript/blob/master/04_chp4/04_inorder_successor.js
 */

function inOrderSuccessor(node) {
  if (node === null) {
    return null;
  }
  var p = null;

  // node.parent === null for root -- If so, return leftmost child of right node.
  // node.right !== null -- If so, you already visited node.left and are in node.center, so return leftmostChild of right node.
  if (node.parent === null || node.right !== null) {
    p = leftMostChild(node.right)
  } else {
    // Go up until child is on left of its parent, instead of right
    // Note: Parent can be on top left or top right. Break, when on top right
    while ((p = node.parent) !== null) {
      if (p.left === node) {
        break;
      }
      node = p;
    }
  }
  return p;
}

function leftMostChild(node) {
  if (node === null) {
    return null;
  }
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}