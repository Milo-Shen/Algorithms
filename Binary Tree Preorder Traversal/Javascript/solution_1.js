// https://leetcode.cn/problems/binary-tree-preorder-traversal/
// https://www.lintcode.com/problem/66/

function preorderTraversal(root) {
  let result = [];
  travel(root, result);
  return result;
}

function travel(root, nums) {
  if (!root) {
    return;
  }

  nums.push(root.val);
  travel(root.left, nums);
  travel(root.right, nums);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, null, 2, 3];
let binaryTree = buildBinaryTree(nums);
console.log(preorderTraversal(binaryTree));
