// https://www.lintcode.com/problem/597

function findSubtree2(root) {}

// test data
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, -5, 11, 1, 2, 4, -2];
let binaryTree = buildBinaryTree(nums);
console.log(findSubtree2(binaryTree).val);
