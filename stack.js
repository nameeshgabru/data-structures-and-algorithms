// LAST IN FIRST OUT

function Stack(arr) {
  this.array = [];
  if (arr) {
    this.array = arr;
  }
}

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

Stack.prototype.push = function (val) {
  this.array.push(val);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

function stackAccessNthTopNode(stack, n) {
  let arrBuff = stack.getBuffer();
  let stackBuff = new Stack(arrBuff);
  while (--n !== 0) {
    stackBuff.pop();
  }
  return stackBuff.pop();
}

function stackSearch(stack, elem) {
  let arrBuff = stack.getBuffer();
  let stackBuff = new Stack(arrBuff);
  while(!stackBuff.isEmpty()){
      if(stackBuff.pop() === elem){
          return true;
      }
  }
  return false;
}

let stack = new Stack();
stack.push(1);
stack.push(23);
stack.push(11);

console.log(stackSearch(stack, 12));
console.log(stackAccessNthTopNode(stack, 3));
console.log(stack.peek());
console.log(stack);
