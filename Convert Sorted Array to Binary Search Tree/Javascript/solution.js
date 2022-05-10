// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
// https://www.lintcode.com/problem/1359

const { TreeNode } = require('../../Base/TreeNode/Javascript/TreeNode');
const { serialize } = require('../../Serialize binary trees/Javascript/solution');

function sortedArrayToBST(nums) {
  if (!nums || !nums.length) {
    return null;
  }

  return dfs(nums, 0, nums.length - 1);
}

function dfs(nums, start, end) {
  if (start > end) {
    return null;
  }

  let mid = start + ~~((end - start) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = dfs(nums, start, mid - 1);
  root.right = dfs(nums, mid + 1, end);

  return root;
}

// test cases
let nums = [-10, -3, 0, 5, 9];
let bst = sortedArrayToBST(nums);
console.log(serialize(bst));
