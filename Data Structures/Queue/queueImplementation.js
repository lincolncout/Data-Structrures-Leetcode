class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // get the first item
  peek(){
    return this.first
  }
  // add item in the first item
  enqueue(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.first = newNode;
      this.last = this.first;
      this.length ++
      return
    }
    this.length ++
    this.last.next = newNode;
    this.last = newNode;
  }
  // remove item from the first item
  dequeue(){
    this.first = this.first.next;
    if(this.first === this.last){
      this.last = null
    }
    this.length --;
  }
  isEmpty(){
    return !!!this.length
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

console.log(myQueue)

//Joy
//Matt
//Pavel
//Samir
