// LFU Node in Doubly Linked Lists
function LFUNode(key, value) {
  this.prev = null;
  this.next = null;
  this.key = key;
  this.data = value;
  this.freqCount = 1;
}

// LFU Doubly Linked Lists
function LFUDoublyLinkedList() {
  this.head = new LFUNode("buffer head", null);
  this.tail = new LFUNode("buffer tail", null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
}

// LFU Cache
function LFUCache(capacity) {
  this.keys = {}; // stores LFUNode
  this.freq = {}; // stores LFUDoublyLinkedList
  this.capacity = capacity;
  this.minFreq = 0;
  this.size = 0;
}

LFUDoublyLinkedList.prototype.insertAtHead = function (node) {
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
  node.prev = this.head;
  this.size++;
};

LFUDoublyLinkedList.prototype.removeAtTail = function () {
  let returnVal = this.tail.prev;
  this.tail.prev.prev.next = this.tail;
  this.tail.prev = this.tail.prev.prev;
  this.size--;
  return returnVal;
};

LFUDoublyLinkedList.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size--;
};

LFUDoublyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

LFUCache.prototype.set = function (key, value) {
  let node = this.keys[key];
  if (node == undefined) {
    // this key node is not in cache
    node = new LFUNode(key, value);
    this.keys[key] = node;
    if (this.size != this.capacity) {
      // cache not full
      if (this.freq[1] === undefined) {
        // first use
        this.freq[1] = new LFUDoublyLinkedList();
      }
      this.freq[1].insertAtHead(node);
      this.size++;
    } else {
      //cache full, remove least frequecy node
      var oldTail = this.freq[this.minFreq].removeAtTail();
      delete this.keys[oldTail.key];
      if (this.freq[1] === undefined) {
        // first use
        this.freq[1] = new LFUDoublyLinkedList();
      }
      this.freq[1].insertAtHead(node);
    }
    this.minFreq = 1;
  } else {
    var oldFreqCount = node.freqCount;
    node.data = value;
    node.freqCount++;
    this.freq[oldFreqCount].remove(node);
    if (this.freq[node.freqCount] === undefined) {
      this.freq[node.freqCount] = new LFUDoublyLinkedList();
    }
    this.freq[node.freqCount].insertAtHead(node);
    // olny if node belonged to minFreqCount List and also that list is now empty, increment minfreq
    if (oldFreqCount === this.minFreq && this.freq[oldFreqCount].isEmpty()) {
      this.minFreq++;
    }
  }
};

LFUCache.prototype.get = function(key){
    var node = this.keys[key];
    if(node == undefined){
        return null;
    }else{
        var oldFreqCount = node.freqCount;
        node.freqCount++;
        this.freq[oldFreqCount].remove(node);
        if(this.freq[node.freqCount] === undefined){
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }
        this.freq[node.freqCount].insertAtHead(node);
        if(oldFreqCount == this.minFreq && this.freq[oldFreqCount].isEmpty()){
            this.minFreq++;
        }
        return node.data;
    }
}

let myLFU = new LFUCache(3);
myLFU.set(1, 'one');
myLFU.set(3, 'three');
myLFU.set(5, 'five');
myLFU.get(3);
myLFU.get(5);
myLFU.get(1);
console.log(myLFU);