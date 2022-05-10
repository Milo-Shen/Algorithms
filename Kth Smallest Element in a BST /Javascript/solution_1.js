// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
// https://www.lintcode.com/problem/902

function kthSmallest(root, k) {
  let nums = [];
  helper(root, nums);
  return nums[k - 1];
}

function helper(root, nums) {
  if (!root) {
    return null;
  }
  helper(root.left, nums);
  nums.push(root);
  helper(root.right, nums);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 1, 4, null, 2];
let binaryTree = buildBinaryTree(nums);
console.log(kthSmallest(binaryTree, 1).val);
