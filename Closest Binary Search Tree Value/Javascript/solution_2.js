// https://www.lintcode.com/problem/900
// https://leetcode.cn/problems/closest-binary-search-tree-value/

function closestValue(root, target) {
  let lowerNode = root;
  let upperNode = root;

  while (root) {
    if (target > root.val) {
      lowerNode = root;
      root = root.right;
    } else if (target < root.val) {
      upperNode = root;
      root = root.left;
    } else {
      return root.val;
    }
  }

  return Math.abs(target - lowerNode.val) > Math.abs(target - upperNode.val)
    ? upperNode.val
    : lowerNode.val;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 5, 1, 3];
let target = 3.714286;
let binaryTreeRoot = buildBinaryTree(nums);
console.log(closestValue(binaryTreeRoot, target));
