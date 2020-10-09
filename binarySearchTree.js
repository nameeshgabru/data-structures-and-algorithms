// Binary search trees (BSTs) also have two children, left and right.
// However, in a binary search tree, the left child is smaller than the parent,
// and the right child is bigger than the parent.
// BSTs have this structure because this enables searching, inserting, and removing
// specific values with O(log(n)) time complexity.

function Node(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

function BinarySearchTree() {
  this._root = null;
}

// inserting 4
//     5
// 1       7
//   (4) 6    8
BinarySearchTree.prototype.insert = function (value) {
  let node = new Node(value);
  if (this._root === null) {
    this._root = node;
  } else {
    let selectedNode = this._root;
    // base case is when node is assigned
    // or could not be assigned cause of equal value
    // till then keep on traversing
    while (true) {
      if (value < selectedNode.value) {
        if (selectedNode.left === null) {
          selectedNode.left = node;
          break;
        } else {
          selectedNode = selectedNode.left; //keep on traverse
        }
      } else if (value > selectedNode.value) {
        if (selectedNode.right === null) {
          selectedNode.right = node;
          break;
        } else {
          selectedNode = selectedNode.right; //keep on traverse
        }
      } else {
        break; // same old value found
      }
    }
  }
};
// Time Complexity (for balanced trees):O(log(n))
// Time Complexity (for unbalanced trees):O(n)
// Time complexity is dependent on the height (top) of the binary search tree.

BinarySearchTree.prototype.remove = function (value) {
  this._root = deleteRecursively(this._root, value);
  function deleteRecursively(node, value) {
    if (node === null) {
      return null; //leaf node reached
    } else {
      if (value < node.value) {
        //work on left node
        node.left = deleteRecursively(node.left, value);
        return node; // current node will be assigned this node as a function call result
      } else if (value > node.value) {
        //work on right node
        node.right = deleteRecursively(node.right, value);
        return node; // current node will be assigned this node as a function call result
      } else {
        //value == node.value
        // if no children
        if (node.left === null && node.right === null) {
          return null; // current node will be assigned null
        } else if (node.left === null) {
          return node.right; //current node will be assigned this node as a function call result
        } else if (node.right === null) {
          return node.left; // current node will be assigned this node as a function call result
        } else {
          // it has both left and right children
          // we will get min of right subtree, assign it to current by returning it
          // and then remove that minimum by again calling deletRecursive
          let tempMin = findMin(node.right);
          node.value = tempMin.value;
          node.right = deleteRecursively(node.right, tempMin.value);
          return node; // current node will be assigned this node as a function call result
        }
      }
    }
  }
};

BinarySearchTree.prototype.search = function (value) {
  return checkRecursively(this._root);
  function checkRecursively(node) {
    if (node === null) {
      // reached null leaf
      return false;
    } else {
      if (node.value > value) {
        // push to left side
        return checkRecursively(node.left);
      } else if (node.value < value) {
        return checkRecursively(node.right);
      } else {
        return true;
      }
    }
  }
};

function findMin(node) {
  if (node.left === null) {
    return node;
  } else {
    return findMin(node.left);
  }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(1);
bst.insert(7);
bst.insert(6);
bst.insert(8);
// console.log(JSON.stringify(bst, null, 4));
bst.insert(4);
// console.log(JSON.stringify(bst, null, 4));
bst.remove(5);
// console.log(JSON.stringify(bst, null, 4));
console.dir(bst, { depth: null });
console.log(bst.search(8));
