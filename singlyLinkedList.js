function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};//O(1)

SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    let tempOld = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = tempOld;
  }
  this.size++;
};//O(1)

SinglyLinkedList.prototype.log = function () {
  let tempNode = this.head;
  let result = "";
  while (tempNode.next) {
    result += tempNode.data + " > ";
    tempNode = tempNode.next;
  }
  result += tempNode.data;
  return result;
}; //O(n)

SinglyLinkedList.prototype.remove = function (value) {
  let prevNode = this.head;
  if (prevNode.data === value) {
    this.head = prevNode.next;
    this.size--;
  } else {
    let currentNode = prevNode.next;
    while (currentNode.next) {
      if (currentNode.data === value) {
        //remove current node
        prevNode.next = currentNode.next;
        prevNode = currentNode;
        currentNode = prevNode.next;
        this.size--;
        break;
      } else {
        prevNode = currentNode;
        currentNode = prevNode.next;
      }
    }
    // could not find reached end
    if (currentNode.data === value) {
      prevNode.next = null;
      this.size--;
    } else {
      throw "value not in singly linked list";
    }
  }
}; //O(n)

SinglyLinkedList.prototype.deleteHead = function () {
  let returnVal = null;
  if (this.head) {
    returnVal = this.head.data;
    this.head = this.head.next;
    this.size--;
  }
  return returnVal;
}; //O(1) This allows the linked list to implement a stack

SinglyLinkedList.prototype.search = function (value) {
  let tempHead = this.head;
  while (tempHead.next) {
    if (tempHead.data === value) {
      return true;
    } else {
      tempHead = tempHead.next;
    }
  }
  // last node
  if (tempHead.data === value) {
    return true;
  }
  return false;
}; //O(n)

let sl = new SinglyLinkedList();
sl.insert("hi");
sl.insert("hello");
sl.insert("nameesh");
// console.log(sl.log());
// sl.remove("hi");
console.log(sl.log());
console.log(sl.deleteHead());
console.log(sl.log());
console.log(sl.search("hi"))
