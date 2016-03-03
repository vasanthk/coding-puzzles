/**
 * Given an array of values, create a balanced binary tree and print each row of the tree in order. Terminate each row with a carriage return.
 *
 * Solution:
 *  - Step 1: A Breadth First Search algorithm is used
 *    to create a balanced binary tree. A linked list
 *    of nodes containing their value and references
 *    to their left and right children is used to
 *    represent the binary tree.
 *  - Step 2: A Breadth First Search algorithm is used
 *    to traverse the tree and add the nodes in order
 *    by row to the result.
 */

function balancedbinaryTree() {
// The given values
// The binary tree
// The node rows to be printed
  var vals, tree, result;
// Set variables
  vals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
  tree = {
    val: vals[0],
    left: null,
    right: null
  };
  result = '';
// Creates the binary tree
  function createTree() {
// A function that adds children to a node
// The temporary holder for each row of nodes
// The index of the current value
// The current tree's depth
// The tree's max depth
// The current node
    var addNodes, row, val, d, depth, node;
// Adds children to the provided node
// param: The node to add the children
    addNodes = function (prtNode) {
// Create the nodes and increase the value
      prtNode.left = {
        val: vals[val],
        left: null,
        right: null
      };
      ++val;
      prtNode.right = {
        val: vals[val],
        left: null,
        right: null
      };
      ++val;
// Add the nodes to temp holder
      row.next.push(prtNode.left, prtNode.right);
    };
// Set the temp holders, value, and max depth
    row = {
      now: [tree],
      next: []
    };
    val = 1;
    depth = 4;
// Add the nodes to tree
    for (d = 1; d < depth; d++) {
// Add nodes
      row.now.forEach(function (node) {
        addNodes(node);
      });
// Reset temp arrays
      row.now = row.next.slice(0);
      row.next = [];
    }
  }

// Saves a string of the binary tree's nodes
//   in order with a line break for each row
  function printNodes() {
// The current and next row of nodes
// The current node being searched
// The left child
// The right child
    var row, node, left, right;
// Set final result
    result = tree.val;
// Set temp holder for each row
    row = {
      now: [tree],
      next: [],
      string: ''
    };
// Loop through nodes
    loop:
      while (true) {
// Set and remove node
        node = row.now.shift();
// If (child exists)
// Then {add child to next row and result}
        if (!!node.left) {
          row.next.push(node.left);
          row.string += (row.next.length > 1) ? ',' : '';
          row.string += node.left.val;
        }
        if (!!node.right) {
          row.next.push(node.right);
          row.string += (row.next.length > 1) ? ',' : '';
          row.string += node.right.val;
        }
// If (current row finished)
// Then {check, update, and reset rows}
// Else {end search}
        if (row.now.length === 0) {
          if (row.next.length > 0) {
            result += '<br />' + row.string;
            row.now = row.next.slice(0);
            row.next = [];
            row.string = '';
          }
          else {
            break loop;
          }
        }
      }
  }

// Create tree and print nodes
  createTree();
  printNodes();
  return result;
}