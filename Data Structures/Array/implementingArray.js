class MyArray {
	constructor(){
		this.length = 0;
		this.data = {};
	}
	
  // O(1)
	get(index){
		return this.data[index]
	}

  // O(1)
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length
  }

  // O(1)
  pop(){
    const lastData = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length --;
    return lastData
  }
  // O(n)
  delete(index){
    const item = this.data[index];
    this.shiftItems(index)
  }

  // O(n)
  shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1];
    this.length --;
  }
}

const newArray = new MyArray();
newArray.push('hy')
newArray.push('you')
newArray.push('!')

newArray.delete(1)
console.log(newArray)