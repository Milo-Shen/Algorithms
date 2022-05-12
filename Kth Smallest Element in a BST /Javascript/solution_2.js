// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
// https://www.lintcode.com/problem/902

function kthSmallest(root, k) {
  let queue = [];

  let cur_node = root;
  while (cur_node) {
    queue.push(cur_node);
    cur_node = cur_node.left;
  }

  for (let i = 0; i < k - 1; i++) {
    let cur_node = queue.pop();
    cur_node = cur_node.right;
    while (cur_node) {
      queue.push(cur_node);
      cur_node = cur_node.left;
    }
  }

  return queue[queue.length - 1];
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [
  41,
  37,
  44,
  24,
  39,
  42,
  48,
  1,
  35,
  38,
  40,
  null,
  43,
  46,
  49,
  0,
  2,
  30,
  36,
  null,
  null,
  null,
  null,
  null,
  null,
  45,
  47,
  null,
  null,
  null,
  null,
  null,
  4,
  29,
  32,
  null,
  null,
  null,
  null,
  null,
  null,
  3,
  9,
  26,
  null,
  31,
  34,
  null,
  null,
  7,
  11,
  25,
  27,
  null,
  null,
  33,
  null,
  6,
  8,
  10,
  16,
  null,
  null,
  null,
  28,
  null,
  null,
  5,
  null,
  null,
  null,
  null,
  null,
  15,
  19,
  null,
  null,
  null,
  null,
  12,
  null,
  18,
  20,
  null,
  13,
  17,
  null,
  null,
  22,
  null,
  14,
  null,
  null,
  21,
  23,
];
let binaryTree = buildBinaryTree(nums);
console.log(kthSmallest(binaryTree, 25).val);
