// https://leetcode.cn/problems/root-equals-sum-of-children/

const checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [10, 4, 6];
let binaryTree = buildBinaryTree(nums);
console.log(checkTree(binaryTree, 5));
