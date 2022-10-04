// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

const { build_list, print_list } = require('../../Base/List/Javascript/List');

function removeNthFromEnd(head, n) {
  // 异常检测
  if (!head || !head.next) {
    return null;
  }

  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
}

let list = build_list([1, 2]);
let header = removeNthFromEnd(list, 2);
print_list(header);
