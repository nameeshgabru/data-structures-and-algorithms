function AVLTree(value) {
  this.left = null;
  this.right = null;
  this.value = value;
  this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function () {
  if (this.value === null) {
    this.depth = 1;
  }
  if (this.left !== null) {
    this.depth = this.left.depth + 1;
  }
  if (this.right !== null && this.depth <= this.right.depth) {
    this.depth = this.right.depth + 1;
  }
};

AVLTree.prototype.rotateLL = function(){
    
}