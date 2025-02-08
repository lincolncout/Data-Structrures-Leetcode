class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // se the top element
  peek(){
    return this.top && this.top.value
  }
  // add node to the top of the stack
  push(value){
    const newNode = new Node(value);
    if(!this.bottom){
      this.top = newNode;
      this.bottom = this.top;
      this.length ++;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length ++;
  }
  // remove node to the top of the stack
  pop(){
    if(this.top === this.bottom){
      this.bottom = null;
    }

    if(this.top && this.top.next){
      this.top = this.top.next;
      this.length --;
    }
  }
  isEmpty(){
    return !!!this.length
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("discord");

myStack.pop()

console.log(myStack.isEmpty())

console.log(myStack)


//discord
//udemy
//google