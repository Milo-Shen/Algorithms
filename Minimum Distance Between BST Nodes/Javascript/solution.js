// https://leetcode.cn/problems/minimum-distance-between-bst-nodes/

function minDiffInBST(root) {
  let stack = [];
  let cur_node = root;
  let pre_node = null;
  let min = Infinity;

  while (cur_node) {
    stack.push(cur_node);
    cur_node = cur_node.left;
  }

  while (stack.length) {
    let node = stack.pop();

    if (pre_node) {
      min = Math.min(min, Math.abs(node.val - pre_node.val));
    }
    pre_node = node;

    let temp = node.right;
    while (temp) {
      stack.push(temp);
      temp = temp.left;
    }
  }

  return min;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [27, null, 34, null, 58, 50, null, 44];
let binaryTree = buildBinaryTree(nums);
console.log(minDiffInBST(binaryTree));
