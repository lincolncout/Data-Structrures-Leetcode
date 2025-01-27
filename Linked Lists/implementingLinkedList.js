
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
    return this
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
    console.log(array)
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
    console.log(this.head)
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
}

// 20 -> 10 -> 5 -> 16

const myLinkedList = new LinkedList(10);

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(20)
myLinkedList.remove(1);
myLinkedList.printList()

