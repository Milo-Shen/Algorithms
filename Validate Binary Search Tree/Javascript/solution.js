// https://leetcode.cn/problems/validate-binary-search-tree/

function isValidBST(root) {}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 1, 4, null, null, 3, 6];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(isValidBST(binaryTreeRoot));
