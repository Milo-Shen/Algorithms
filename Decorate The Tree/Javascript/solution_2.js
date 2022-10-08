// https://leetcode.cn/problems/KnLfVT/

const { TreeNode } = require('../../Base/TreeNode/Javascript/TreeNode');
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');

const expandBinaryTree = function (root) {
  if (!root) {
    return root;
  }

  if (root.left) {
    root.left = new TreeNode(-1, root.left, null);
    expandBinaryTree(root.left.left);
  }

  if (root.right) {
    root.right = new TreeNode(-1, null, root.right);
    expandBinaryTree(root.right.right);
  }

  return root;
};

// test cases
let nums = [7, 5, 6];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(expandBinaryTree(binaryTreeRoot));
