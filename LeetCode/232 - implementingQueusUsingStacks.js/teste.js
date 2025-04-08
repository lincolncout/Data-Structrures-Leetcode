// ["MyQueue","push","push","pop","push","push","pop","peek"]

var Node = function (value) {
  this.value = value;
  this.next = null;
};

var MyQueue = function () {
  this.first = null;
  this.last = null;
  this.length = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  const newNode = new Node(x);
  if (!this.first) {
    this.first = newNode;
    this.last = this.first;
    this.length++;
    return;
  }
  this.last.next = newNode;
  this.last = newNode;
  this.length++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.first === this.last) {
    this.last = null;
  }
  const valorAtual = this.first && this.first.value;
  this.length--;
  this.first = this.first.next;
  return valorAtual;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.first.value;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !!!this.length;
};
let x = 1;

const myQueue = new MyQueue();
console.log(myQueue.push(1)); // queue is: [1]
console.log(myQueue.push(2)); // queue is: [1]
console.log(myQueue);
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue);
console.log(myQueue);
console.log(myQueue.push(3)); // queue is: [1]
console.log(myQueue.push(4)); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.pop()); // return 1
console.log(myQueue.peek()); // return false

// console.log(myQueue)
