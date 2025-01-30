
class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    // desafio -> checar parametros
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    // desafio -> checar parametros
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode
    this.length++;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array
  }

  insert(index,value){
    // desafio -> checar parametros
    const newNode = new Node(value);

    let leader = this.findPreNode(index);

    newNode.next = leader.next;
    leader.next = newNode;
    this.length ++;
  }

  remove(index){
    // desafio -> checar parametros
    let leader = this.findPreNode(index);
    if(leader.next.next){
      leader.next = leader.next.next;
    }
    else{
      leader.next = null
    }
    this.length --;
  }

  findPreNode(index){
    let currentNode = this.head;
    let initiaIndex = 0;
    while(currentNode && initiaIndex < index - 1){
      currentNode = currentNode.next;
      initiaIndex ++;
    }
    return currentNode;
  }

  reverse(){
    if(!this.head.next){
      return;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first
  }
}

// 20 -> 10 -> 5 -> 16

const myLinkedList = new LinkedList(10);

myLinkedList.append(5)
myLinkedList.append(16)
// myLinkedList.prepend(20)
// myLinkedList.remove(1);
myLinkedList.reverse();
console.log(myLinkedList.printList())

