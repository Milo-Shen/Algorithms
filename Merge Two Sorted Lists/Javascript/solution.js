// https://leetcode.cn/problems/merge-two-sorted-lists/

const { build_list, print_list } = require('../../Base/List/Javascript/List');

function mergeTwoLists(list1, list2) {
  // 异常处理
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let l1 = list1;
  let l2 = list2;
  let l3 = null;

  if (l1.val <= l2.val) {
    l3 = l1;
    l1 = l1.next;
  } else {
    l3 = l2;
    l2 = l2.next;
  }

  let node = l3;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = l2;
      node = node.next;
      l2 = l2.next;
    }
  }

  while (l1) {
    node.next = l1;
    node = node.next;
    l1 = l1.next;
  }

  while (l2) {
    node.next = l2;
    node = node.next;
    l2 = l2.next;
  }

  return l3;
}

let l1 = build_list([]);
let l2 = build_list([1, 3, 4]);
print_list(mergeTwoLists(l1, l2));
