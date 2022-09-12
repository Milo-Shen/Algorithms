// https://leetcode.cn/problems/minimum-depth-of-binary-tree/

function minDepth(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  let min_left = minDepth(root.left);
  let min_right = minDepth(root.right);

  if (!root.left || !root.right) {
    return min_left + min_right + 1;
  }

  return Math.min(min_left, min_right) + 1;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 9, 20, '#', '#', 15, 7];
let binaryTree = buildBinaryTree(nums);
console.log(minDepth(binaryTree));
