class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
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

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(value,index){
    const newNode = new Node(value)
    let leader = this.findPreNode(index);
    newNode.next = leader.next;
    leader.next.previous = newNode;
    newNode.previous = leader;
    leader.next = newNode
    this.length ++;
  }
  //delete

  findPreNode(index){
    let currentNode = this.head;
    let initialIndex = 0;
    while(currentNode && initialIndex < index -1){
      currentNode = currentNode.next
      initialIndex ++;
    }
    return currentNode;
  }
  //findPreNode 
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(15);
myLinkedList.append(17);
myLinkedList.append(20);
myLinkedList.prepend(3);
myLinkedList.insert(12,1)
// myLinkedList.printList()
console.log(myLinkedList)