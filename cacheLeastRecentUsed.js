function DLLNode(key, data) {
  this.key = key;
  this.data = data;
  this.prev = null;
  this.next = null;
}

// we will keep the most recent node at tail,
// and keep on removing from head if capacity is passed
function LRUCache(capacity) {
  this.capacity = capacity;
  this.keys = {};
  this.head = new DLLNode("head", null);
  this.tail = new DLLNode("tail", null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

//add node to tail
LRUCache.prototype.addNode = function (node) {
  let realTail = this.tail.prev;
  realTail.next = node;
  this.tail.prev = node;
  node.prev = realTail;
  node.next = this.tail;
};

LRUCache.prototype.get = function (key) {
  let node = this.keys[key];
  if (node == undefined) {
    return null;
  } else {
    this.removeNode(node);
    this.addNode(node);
    return node.data;
  }
};

LRUCache.prototype.set = function (key, value) {
  let node = this.keys[key];
  if (node) {
    this.removeNode(node);
  }
  let newNode = new DLLNode(key, value);
  this.addNode(newNode);
  this.keys[key] = newNode;

  if (Object.keys(this.keys).length > this.capacity) {
    let nodeToRemove = this.head.next;
    this.removeNode(nodeToRemove);
    delete this.keys[nodeToRemove.key];
  }
};

let myLru = new LRUCache(3);

// Set
myLru.set(1, 1); // 1
myLru.set(2, 2); // 1 <-> 2
myLru.set(3, 3); // 1 <-> 2 <-> 3
myLru.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
myLru.get(2);
console.log(myLru);