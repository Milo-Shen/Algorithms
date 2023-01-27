// https://leetcode.cn/problems/merge-nodes-in-between-zeros/

const mergeNodes = function (head) {
  let node = head;
  let sum = 0;

  while (node !== null) {
    if (node.val === 0) {
      console.log(sum);
      sum = 0;
    }

    sum += node.val;

    node = node.next;
  }

  return head;
};

// test cases
const { build_list, print_list } = require('../../Base/List/Javascript/List');
let root = mergeNodes(build_list([0, 3, 1, 0, 4, 5, 2, 0]));
print_list(root);
