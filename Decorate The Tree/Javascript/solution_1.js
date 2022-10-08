// https://leetcode.cn/problems/KnLfVT/

const { TreeNode } = require('../../Base/TreeNode/Javascript/TreeNode');
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');

const expandBinaryTree = function (root) {
  const queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node.left) {
      node.left = new TreeNode(-1, node.left, null);
      queue.push(node.left.left);
    }

    if (node.right) {
      node.right = new TreeNode(-1, null, node.right);
      queue.push(node.right.right);
    }
  }

  return root;
};

// test cases
let nums = [7, 5, 6];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(expandBinaryTree(binaryTreeRoot));
