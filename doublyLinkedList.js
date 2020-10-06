function DoublyLinkedListNode(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
}; //O(1)

DoublyLinkedList.prototype.addAtFront = function (val) {
  if (this.head === null) {
    this.head = this.tail = new DoublyLinkedListNode(val);
  } else {
    let tempNode = new DoublyLinkedListNode(val);
    tempNode.next = this.head;
    this.head.prev = tempNode;
    this.head = tempNode;
  }
  this.size++;
}; //O(1)

DoublyLinkedList.prototype.addAtTail = function (val) {
  let tempNode = new DoublyLinkedListNode(val);
  if (this.tail === null) {
    this.head = this.tail = tempNode;
  } else {
    tempNode.prev = this.tail;
    this.tail.next = tempNode;
    this.tail = tempNode;
  }
  this.size++;
}; //O(1)

DoublyLinkedList.prototype.deleteAtHead = function () {
  let returnVal = null;
  if (this.head) {
    returnVal = this.head.data;
    // if single element
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }
  return returnVal;
}; //O(1)

DoublyLinkedList.prototype.deleteAtTail = function () {
  let returnVal = null;
  if (this.tail) {
    returnVal = this.tail.data;
    if (this.tail === this.head) {
      //single element
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }
  return returnVal;
}; //O(1) it can be used like a dequeue function from the queue data structure

DoublyLinkedList.prototype.search = function(val){
    if(this.head === null){return false;}
    let currentHead = this.head;
    while(currentHead.next){
        if(currentHead.data === val){
            return true;
        }else{
            currentHead = currentHead.next;
        }
    }
    //last elem
    if(currentHead.data === val){
        return true;
    }
    return false;
} //O(n)

DoublyLinkedList.prototype.logHeadToTail = function () {
  let tempNode = this.head;
  let result = "";
  if (!this.isEmpty()) {
    while (tempNode.next) {
      result += tempNode.data + " > ";
      tempNode = tempNode.next;
    }
    result += tempNode.data;
  }
  return result;
}; //O(n)

DoublyLinkedList.prototype.logTailToHead = function () {
  let tempNode = this.tail;
  let result = "";
  if (!this.isEmpty()) {
    while (tempNode.prev) {
      result += tempNode.data + " < ";
      tempNode = tempNode.prev;
    }
    result += tempNode.data;
  }
  return result;
}; //O(n)

let dl = new DoublyLinkedList();

dl.addAtFront("1");
dl.addAtFront("2");
dl.addAtFront("3");
dl.addAtFront("4");
dl.addAtTail("0");

console.log(dl.logHeadToTail());
console.log(dl.deleteAtHead());
console.log(dl.logHeadToTail());
console.log(dl.deleteAtTail());
console.log(dl.logHeadToTail());
console.log(dl.search("0"));