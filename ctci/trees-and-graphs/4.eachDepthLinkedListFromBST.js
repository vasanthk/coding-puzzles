/**
 * Given a binary search tree, design an algorithm which creates a linked list of all
 * the nodes at each depth (i e , if you have a tree with depth D, you’ll have D linked lists)
 *
 * Hint: BFS or DFS works.
 * Current implementation is in BFS
 *
 * Time Complexity: O(n)
 * No Extra space required for BFS
 * DFS uses O(log n) space for the recursice calls.
 *
 * @Reference:
 * https://github.com/learnerChick/JavascriptAlgorithms/blob/master/BinarySearchTree/LinkedListFromBst.js
 *
 */

// Linked List Node constructor
function LinkedListNode(element) {
  this.element = element;
  this.next = null;
}

// Linked List head
function LinkedList() {
  this.head = null;
}

// Linked List prototype method
LinkedList.prototype.insertFirst = function (item) {
  var linkedListItem = new LinkedListNode(item);

  if (this.head === null) {
    this.head = linkedListItem;
  }
  else {
    var oldHead = this.head;
    this.head = linkedListItem;
    this.head.next = oldHead;
  }
};

// Tree node constructor
var TreeNode = function (element) {
  this.element = element;
  this.left = null;
  this.right = null;
};

// Create Linked List of all nodes at each depth.
function createList(root) {
  var lists = listCreator(root, [], 0);
  return lists;
}

// Function that creates the Linked List
function listCreator(node, lists, level) {
  if (node === null) {
    return;
  }

  var list = null;

  //current level doesn't have its own linked list
  if (level === lists.length) {
    list = new LinkedList();
    lists.push(list);
  } else {
    list = lists[level];
  }

  list.insertFirst(node);
  console.log("Data inserted at ", level, " with value ", node.element);
  listCreator(node.left, lists, level + 1);
  listCreator(node.right, lists, level + 1);

  return lists;
}

var root = new TreeNode(5);
var child1 = new TreeNode(2);
var child2 = new TreeNode(7);
var grandchild1 = new TreeNode(1);
var grandchild2 = new TreeNode(3);
var grandchild3 = new TreeNode(6);
var grandchild4 = new TreeNode(8);
var grandchild5 = new TreeNode(9);
var grandchild6 = new TreeNode(11);
root.left = child1;
root.right = child2;
child1.left = grandchild1;
child1.right = grandchild2;
child2.left = grandchild3;
child2.right = grandchild4;
grandchild4.right = grandchild5;
grandchild5.right = grandchild6;


// OUTPUT:
//
// createList(root)
//
// Data inserted at  0  with value  5
// Data inserted at  1  with value  2
// Data inserted at  2  with value  1
// Data inserted at  2  with value  3
// Data inserted at  1  with value  7
// Data inserted at  2  with value  6
// Data inserted at  2  with value  8
// Data inserted at  3  with value  9
// Data inserted at  4  with value  11
//
// [LinkedList, LinkedList, LinkedList, LinkedList, LinkedList]