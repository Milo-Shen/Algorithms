// https://leetcode.cn/problems/merge-nodes-in-between-zeros/

const mergeNodes = function (head) {
  let sum = 0;
  let node = head;
  let pre_node = head;

  while (node !== null) {
    if (node.val === 0) {
      node.val = sum;

      if (node !== head) {
        pre_node.next = node;
        pre_node = node;
      }

      sum = 0;
    } else {
      sum += node.val;
    }

    node = node.next;
  }

  return head.next;
};

// test cases
const { build_list, print_list } = require('../../Base/List/Javascript/List');
let root = mergeNodes(build_list([0, 1, 0, 3, 0, 2, 2, 0]));
print_list(root);
