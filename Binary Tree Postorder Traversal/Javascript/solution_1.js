// https://leetcode.cn/problems/binary-tree-postorder-traversal/
// https://www.lintcode.com/problem/68/solution

function preorderTraversal(root) {
  let result = [];
  travel(root, result);
  return result;
}

function travel(root, nums) {
  if (!root) {
    return;
  }

  travel(root.left, nums);
  travel(root.right, nums);

  nums.push(root.val);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, null, 2, 3];
let binaryTree = buildBinaryTree(nums);
console.log(preorderTraversal(binaryTree));
