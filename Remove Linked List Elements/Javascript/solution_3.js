// https://leetcode.cn/problems/remove-linked-list-elements/

const { build_list, print_list, ListNode } = require('../../Base/List/Javascript/List');

const removeElements = function (head, val) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;

  let node = dummyHead;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return dummyHead.next;
};

// test cases

let head = build_list([1, 2, 2, 1]);
print_list(removeElements(head, 2));
