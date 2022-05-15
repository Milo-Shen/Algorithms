// https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/

function kthLargest(root, k) {
  let nums = [];
  getNums(root, nums);
  return nums[nums.length - k];
}

function getNums(root, nums) {
  if (!root) {
    return;
  }
  getNums(root.left, nums);
  nums.push(root.val);
  getNums(root.right, nums);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 1, 4, null, 2];
let binaryTree = buildBinaryTree(nums);
console.log(kthLargest(binaryTree, 1));
