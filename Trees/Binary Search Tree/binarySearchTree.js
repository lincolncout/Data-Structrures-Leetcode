class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    if(!this.root){
      this.root = new Node(value);
      return;
    }
    this.insertValue(value,this.root);
  }

  insertValue(value,node){
    if(value < node.value){
      if(node.left){
        return this.insertValue(value,node.left)
      }
      node.left = new Node(value)
    }
    else if(value > node.value){
      if(node.right){
        return this.insertValue(value,node.right)
      }
      node.right = new Node(value)
    }
  }
  lookup(value){
    this.lookupValue(value,this.root)
  }

  lookupValue(value, node){
    if(value < node.value){
      return this.lookupValue(value,node.left)
    }
    else if(value > node.value){
      return this.lookupValue(value,node.right)
    }
    else{
      console.log(node)
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(170);

// tree.lookup(20)

console.log(JSON.stringify(traverse(tree.root)))


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//      9
//  4       20
//1   6   15   170