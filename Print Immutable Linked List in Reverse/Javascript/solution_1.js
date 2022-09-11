// https://leetcode.cn/problems/print-immutable-linked-list-in-reverse/

function printLinkedListInReverse(head) {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.getNext();
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i].printValue();
  }
}
