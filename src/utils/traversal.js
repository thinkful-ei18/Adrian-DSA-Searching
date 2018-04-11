import BinarySearchTree from './binarySearchTree';
const util = require('util');

function preOrderTraversal () {
  let BST = new BinarySearchTree();
    // 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22
    BST.insert(25,25);
    BST.insert(15,15);
    BST.insert(50,50);
    BST.insert(10,10);
    BST.insert(24,24);
    BST.insert(35,35);
    BST.insert(70,70);
    BST.insert(4,4);
    BST.insert(12,12);
    BST.insert(18,18);
    BST.insert(31,31);
    BST.insert(44,44);
    BST.insert(66,66);
    BST.insert(90,90);



  console.log(util.inspect(BST, false, null));
}

// Tree traversal
// Using your Binary Search Tree class, create a Binary Search Tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Implement in-order, pre-order, and post-order functions. Check your answers:

// A Pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// InOrder: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25