// A binary tree is a type of tree that has only two children nodes: left and right.

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

let myTree = new BinaryTree();

let khairu = new BinaryTreeNode("khairu");
let tarsem = new BinaryTreeNode("tarsem");
let nishu = new BinaryTreeNode("nishu");
let ashu = new BinaryTreeNode("ashu");
let yohaan = new BinaryTreeNode("yohaan");
let yuvi = new BinaryTreeNode("yuvi");
let kukka = new BinaryTreeNode("kukka");
let priyanka = new BinaryTreeNode("priyanka");
let mona = new BinaryTreeNode("mona");

myTree._root = khairu;
khairu.left = tarsem;
tarsem.left = nishu;
nishu.left = yohaan;
nishu.right = yuvi;
tarsem.right = ashu;
khairu.right = kukka;
kukka.left = priyanka;
kukka.right = mona;

//traversal methods depends on where we use the node value
//traverse like parent>left>right
BinaryTree.prototype.traversePreOrder = function () {
  function traverseHelper(node) {
    if (node === null) {
      return;
    }
    // first prints node value then go to left and then to right
    console.log(node.value);
    traverseHelper(node.left);
    traverseHelper(node.right);
  }
  traverseHelper(this._root);
};

//traverse like left>right>parent
BinaryTree.prototype.traversePostOrder = function () {
  function traverseHelper(node) {
    if (node === null) {
      return;
    }
    // first go to left and then to right and then prints node value
    traverseHelper(node.left);
    traverseHelper(node.right);
    console.log(node.value);
  }
  traverseHelper(this._root);
};

//traverse like left>parent>right
BinaryTree.prototype.traverseInOrder = function () {
  function traverseHelper(node) {
    if (node === null) {
      return;
    }
    // first go to left, print value and then to right
    traverseHelper(node.left);
    console.log(node.value);
    traverseHelper(node.right);
  }
  traverseHelper(this._root);
};

// console.log("----PreOrderTraverse-----");
// myTree.traversePreOrder();
// console.log("-------------------------");
// console.log("----PostOrderTraverse-----");
// myTree.traversePostOrder();
// console.log("-------------------------");
// console.log("----InOrderTraverse-----");
// myTree.traverseInOrder();
// console.log("-------------------------");

//This is also known as breadth first search
//starting with root, then its left right children
// then left's left right children and then right's left right and so on
// same level at hiarchy gets traversed and then next level
BinaryTree.prototype.traverseLevelOrder = function () {
  if (this._root === null) {
    return;
  }

  let toCheck = [this._root];
  function dealNode(node) {
    console.log(node.value);
    if (node.left) {
      toCheck.push(node.left);
    }
    if (node.right) {
      toCheck.push(node.right);
    }
    pushQueue();
  }

  function pushQueue() {
    if (toCheck.length) {
      dealNode(toCheck.shift());
    } else {
      console.log("done");
    }
  }

  pushQueue();
};

// console.log("----levelOrderTraverse-----");
// myTree.traverseLevelOrder();
// console.log("-------------------------");
