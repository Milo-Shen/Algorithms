// https://leetcode.cn/problems/add-two-numbers/

const { build_list, print_list, ListNode } = require('../../Base/List/Javascript/List');

function addTwoNumbers(l1, l2) {
  let root = new ListNode();
  let node = root;
  let carry = 0;

  while (l1 && l2) {
    let sum = l1.val + l2.val + carry;

    carry = ~~(sum / 10);

    node.next = new ListNode(sum % 10);
    node = node.next;

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    let sum = l1.val + carry;
    carry = ~~(sum / 10);

    node.next = new ListNode(sum % 10);
    node = node.next;
    l1 = l1.next;
  }

  while (l2) {
    let sum = l2.val + carry;
    carry = ~~(sum / 10);

    node.next = new ListNode(sum % 10);
    node = node.next;
    l2 = l2.next;
  }

  if (carry) {
    node.next = new ListNode(1);
  }

  return root.next;
}

let l1 = build_list([2, 4, 5]);
let l2 = build_list([5, 6, 4]);
print_list(addTwoNumbers(l1, l2));
