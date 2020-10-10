function Heap() {
  this.items = [];
}

Heap.prototype.swap = function (index1, index2) {
  let item1 = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = item1;
};

Heap.prototype.parentIndex = function (index) {
  return Math.floor((index - 1) / 2);
};

Heap.prototype.leftChildIndex = function (index) {
  return index * 2 + 1;
};

Heap.prototype.rightChildIndex = function (index) {
  return index * 2 + 2;
};

Heap.prototype.parent = function (index) {
  return this.items[this.parentIndex(index)];
};

Heap.prototype.leftChild = function (index) {
  return this.items[this.leftChildIndex(index)];
};

Heap.prototype.rightChild = function (index) {
  return this.items[this.rightChildIndex(index)];
};

Heap.prototype.peek = function (index) {
  return this.items[index];
};

Heap.prototype.size = function () {
  return this.items.length;
};

function MinHeap() {
  this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.bubbleDown = function () {
  let index = 0;
  while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
    let smallerIndex = this.leftChildIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[smallerIndex]
    ) {
      // right is smaller
      smallerIndex = this.rightChildIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
};

MinHeap.prototype.bubbleUp = function () {
  let index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    let parentIndex = this.parentIndex(index);
    this.swap(parentIndex, index);
    index = parentIndex;
  }
};

MinHeap.prototype.add = function (item) {
  this.items.push(item);
  this.bubbleUp();
};

MinHeap.prototype.poll = function () {
  let item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
};


let minH = new MinHeap();
minH.add(22);
minH.add(11);
minH.add(32);
minH.add(101);
minH.add(59);

for(let l=0; l<5; l++){
  console.log(minH.poll());
}