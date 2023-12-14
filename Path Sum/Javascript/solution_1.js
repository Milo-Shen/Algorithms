// https://leetcode.cn/problems/path-sum/description/

const hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  let result = { hasPathSum: false };
  divideConquer(root, [root.val], targetSum, result);
  return result.hasPathSum;
};

const divideConquer = function (root, temp, targetSum, result) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    let sum = temp.reduce((a, b) => a + b);
    if (sum === targetSum) {
      result.hasPathSum = true;
    }
  }

  if (root.left) {
    divideConquer(root.left, [...temp, root.left.val], targetSum, result);
  }

  if (root.right) {
    divideConquer(root.right, [...temp, root.right.val], targetSum, result);
  }
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
let binaryTree = buildBinaryTree(nums);
console.log(hasPathSum(binaryTree, 22));
