// https://leetcode.cn/problems/most-frequent-subtree-sum/

function findFrequentTreeSum(root) {}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 2, -3];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(findFrequentTreeSum(binaryTreeRoot));
