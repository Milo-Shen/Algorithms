// https://leetcode.cn/problems/remove-linked-list-elements/

const removeElements = function (head, val) {
  if (!head) {
    return head;
  }

  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

// test cases
const { build_list, print_list } = require('../../Base/List/Javascript/List');
let head = build_list([1, 2, 2, 1]);
print_list(removeElements(head, 2));
