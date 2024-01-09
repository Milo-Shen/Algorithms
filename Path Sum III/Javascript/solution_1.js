// https://leetcode.cn/problems/path-sum-iii/description/

const pathSum = function (root, targetSum) {};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
let binaryTree = buildBinaryTree(nums);
console.log(pathSum(binaryTree, 8));
