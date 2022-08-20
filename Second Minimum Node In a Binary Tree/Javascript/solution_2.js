// https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/
function findSecondMinimumValue(root) {
  return helper(root, root.val);
}

function helper(root, min) {
  if (!root) {
    return -1;
  }

  if (root.val > min) {
    return root.val;
  }

  let left = helper(root.left, min);
  let right = helper(root.right, min);

  if (left > min && right > min) {
    return Math.min(left, right);
  }

  return Math.max(left, right);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 5, 6];
let binaryTree = buildBinaryTree(nums);
console.log(findSecondMinimumValue(binaryTree));
