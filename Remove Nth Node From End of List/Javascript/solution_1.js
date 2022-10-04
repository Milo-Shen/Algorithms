// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

const { build_list, print_list } = require('../../Base/List/Javascript/List');

function removeNthFromEnd(head, n) {
  let list = [];

  let node = head;

  while (node) {
    list.push(node);
    node = node.next;
  }

  let max = list.length;
  let pre = max - n - 1;
  let cur = max - n;

  if (cur === 0) {
    head = head.next;
    return head;
  }

  list[pre].next = list[cur].next;

  return head;
}

let list = build_list([1, 2]);
let header = removeNthFromEnd(list, 2);
print_list(header);
