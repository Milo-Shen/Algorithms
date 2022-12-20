// https://leetcode.cn/problems/add-two-numbers-ii/

const { build_list, print_list, ListNode } = require('../../Base/List/Javascript/List');

const addTwoNumbers = function (l1, l2) {
  let l1_stack = [];
  let l2_stack = [];

  while (l1) {
    l1_stack.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    l2_stack.push(l2.val);
    l2 = l2.next;
  }

  let root = new ListNode();
  let node = root;
  let carry = 0;

  while (l1_stack.length && l2_stack.length) {
    let sum = l1_stack.pop() + l2_stack.pop() + carry;
    carry = ~~(sum / 10);

    let cur_node = new ListNode(sum % 10);
    cur_node.next = node.next;
    node.next = cur_node;
  }

  while (l1_stack.length) {
    let sum = l1_stack.pop() + carry;
    carry = ~~(sum / 10);

    let cur_node = new ListNode(sum % 10);
    cur_node.next = node.next;
    node.next = cur_node;
  }

  while (l2_stack.length) {
    let sum = l2_stack.pop() + carry;
    carry = ~~(sum / 10);

    let cur_node = new ListNode(sum % 10);
    cur_node.next = node.next;
    node.next = cur_node;
  }

  if (carry) {
    let cur_node = new ListNode(1);
    cur_node.next = node.next;
    node.next = cur_node;
  }

  return root.next;
};

let l1 = build_list([7, 2, 4, 3]);
let l2 = build_list([5, 6, 4]);
print_list(addTwoNumbers(l1, l2));
