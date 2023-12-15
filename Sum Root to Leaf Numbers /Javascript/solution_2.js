// https://leetcode.cn/problems/path-sum/description/

const hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  return dfs(root, 0, targetSum);
};

const dfs = function (root, sum, targetSum) {
  if (!root) {
    return false;
  }

  if (dfs(root.left, sum + root.val, targetSum)) {
    return true;
  }

  if (dfs(root.right, sum + root.val, targetSum)) {
    return true;
  }

  return sum + root.val === targetSum;
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
let binaryTree = buildBinaryTree(nums);
console.log(hasPathSum(binaryTree, 22));
