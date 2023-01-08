// https://leetcode.cn/problems/remove-linked-list-elements/

const removeElements = function (head, val) {
  let prev = null;
  let current = head;

  while (current) {
    if (current.val === val) {
      if (current === head) {
        head = head.next;
        prev = null;
      } else if (!current.next && prev) {
        prev.next = null;
        return head;
      } else {
        if (prev) {
          prev.next = current.next;
        }
      }
    } else {
      prev = current;
    }

    current = current.next;
  }

  return head;
};

// test cases
const { build_list, print_list, ListNode } = require('../../Base/List/Javascript/List');
let head = build_list([7, 7, 7, 7]);
print_list(removeElements(head, 7));
