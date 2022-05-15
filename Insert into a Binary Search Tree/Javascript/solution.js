// https://leetcode.cn/problems/insert-into-a-binary-search-tree/
// https://www.lintcode.com/problem/85

const { TreeNode } = require('../../Base/TreeNode/Javascript/TreeNode');

function insertIntoBST(root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }

  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
const { serialize } = require('../../Serialize binary trees/Javascript/solution');
let nums = [2, 1, 3];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(serialize(insertIntoBST(binaryTreeRoot, 5)));
