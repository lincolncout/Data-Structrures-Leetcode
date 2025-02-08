class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  addItens(array) {
    let tail = head;
    for (let i = 0; i < array.length; i++) {
      let newNode = new ListNode(array[i]);
      tail.next = newNode;
      tail = newNode;
    }
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

  if (head === null) return null

  let current = head;

  while (current && current.next !== null) {
    const next = current.next;
    if (next.value === head.value) {
      current.next = next.next;
    }
    current = current.next
  }

  return head;
};

let head = new ListNode(1);
head.addItens([1, 2, 3, 3])

console.log(teste())

function teste() {
  if (head === null) return null

  let current = head;

  while (current && current.next !== null) {
    let next = current.next;
    while (next && next.val === current.val) {
      next = next.next
    }
    current.next = next;
    current = current.next
  }

  return head;
};