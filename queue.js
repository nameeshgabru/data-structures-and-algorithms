// FIRST IN FIRST OUT
function Queue(arr) {
  this.array = [];
  if (arr) {
    this.array = arr;
  }
}

Queue.prototype.peek = function () {
  return this.array[0];
};

Queue.prototype.enqueue = function (val) {
  this.array.push(val);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

function queueAccessNthTopNode(queue, n) {
  var bufferArray = queue.getBuffer();
  if (n <= 0) throw "Error";

  var bufferQueue = new Queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }
  return bufferQueue.dequeue();
}

// Search
function queueSearch(queue, element) {
  var bufferArray = queue.getBuffer();
  var bufferQueue = new Queue(bufferArray);
  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() == element) {
      return true;
    }
  }
  return false;
}

let queue = new Queue();
queue.enqueue(1); // Add 1
queue.enqueue(2); // Add 2
queue.enqueue(3); // Add 3

console.log(queueAccessNthTopNode(queue, 3));
console.log(queueSearch(queue, 21));
console.log(queue);
