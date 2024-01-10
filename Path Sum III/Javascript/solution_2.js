// https://leetcode.cn/problems/path-sum-iii/description/

const pathSum = function (root, targetSum) {
  if (root == null) {
    return 0;
  }

  let result = rootSum(root, targetSum);
  result += pathSum(root.left, targetSum);
  result += pathSum(root.right, targetSum);

  return result;
};

const rootSum = (root, targetSum) => {
  let result = 0;

  if (root == null) {
    return 0;
  }

  const val = root.val;
  if (val === targetSum) {
    result++;
  }

  result += rootSum(root.left, targetSum - val);
  result += rootSum(root.right, targetSum - val);

  return result;
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
let binaryTree = buildBinaryTree(nums);
console.log(pathSum(binaryTree, 22));
