class HashTable{
    constructor(size){
      this.data = new Array(size);
    }

    // propriedade/função privada -> por ter o _  -> só pode ser acessada dentro da classe teoricamente
    _hash(key){
      let hash = 0;
      for(let i = 0; i< key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }

      return hash
    } // O(1)

    set(key, value){
      const address = this._hash(key);
      if(!this.data[address]){
        this.data[address] = [];
      }
      this.data[address].push([key,value])
      return this.data
    } // O(1)

    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address];
      if(currentBucket){
        for(let i = 0; i< currentBucket.length; i++){
          if(currentBucket[i][0] === key){
            return currentBucket[i][1];
          } 
        }
      }
      return undefined
    } // O(1) -> sem colisões (maioria das vezes)

    keys(){
      const keysArray = [];
      for(let i =0; i< this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray
    } /* O (n) -> apesar de esse n não ser a quantidade de itens e sim a quantidade de memória alocada para a hash table
      Esse método não considera colisão */

    keysWithColision() {
      if (!this.data.length) {
        return undefined
      }
      let result = []
      // loop through all the elements
      for (let i = 0; i < this.data.length; i++) {
          // if it's not an empty memory cell
          if (this.data[i] && this.data[i].length) {
            // but also loop through all the potential collisions
            if (this.data.length > 1) {
              for (let j = 0; j < this.data[i].length; j++) {
                result.push(this.data[i][j][0])
              }
            } else {
              result.push(this.data[i][0])
            } 
          }
      }
      return result; 
    }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)
console.log(myHashTable.keys())