function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  let soma1 = retornaSomaItens(l1);
  let soma2 = retornaSomaItens(l2);

  console.log(soma1.toLocaleString("en-US", { useGrouping: false }))

  let somaCompleta = ((soma1) + (soma2)).toString()
  let newList = 0;

  if(somaCompleta.length && somaCompleta.length > 0){
      newList = new ListNode(Number(somaCompleta[somaCompleta.length - 1]));

      let currentNode = newList

      if(somaCompleta.length >= 2){
          for(let i = somaCompleta.length - 2; i >= 0; i--){
              const node = new ListNode(Number(somaCompleta[i]))
              currentNode.next = node;
              currentNode = currentNode.next;
          }
      }
  }

  return newList
};

let somaCompleta = (BigInt((soma1).toString()) + BigInt((soma2).toString()))

function retornaSomaItens(list){
let soma = BigInt(0);
let posicaoBase10 = 0;
if(list !== null){
  while(list){
    soma += list.val * (10 ** posicaoBase10);
    list = list.next;
    posicaoBase10 +=1;
  }
}
return soma;
}