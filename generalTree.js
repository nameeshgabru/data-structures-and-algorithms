// General Tree Structure
// A general tree data structure is composed of nodes with children nodes. 
// The top node is called the root node.

function TreeNode(value){
    this.value = value;
    this.children = []; // array of more tree nodes
}

function Tree(){
    this.root = null;
}

let myTree = new Tree();

let khairu = new TreeNode('khairu');
let tarsem = new TreeNode('tarsem');
let nishu = new TreeNode('nishu');
let ashu = new TreeNode('ashu');
let yohaan = new TreeNode('yohaan');
let yuvi = new TreeNode('yuvi');
let kukka = new TreeNode('kukka');
let priyanka = new TreeNode('priyanka');
let mona = new TreeNode('mona');
let shanga = new TreeNode('shanga');
let rohit = new TreeNode('rohit');
let babbu = new TreeNode('babbu');
let kaka = new TreeNode('kaka');
let mammu = new TreeNode('mammu');
let gurleen = new TreeNode('gurleen');

myTree.root = khairu;
khairu.children = [tarsem, kukka, shanga, mammu];
tarsem.children = [nishu, ashu];
nishu.children = [yohaan, yuvi];
kukka.children = [priyanka, mona];
shanga.children = [rohit, babbu, kaka];
mammu.children = [gurleen];

console.log(myTree);
