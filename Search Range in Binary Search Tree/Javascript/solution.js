// https://www.lintcode.com/problem/11/description

function searchRange(root, k1, k2) {
  let nums = [];
  travel(root, nums, k1, k2);
  return nums;
}

function travel(root, nums, k1, k2) {
  if (!root) {
    return;
  }

  travel(root.left, nums, k1, k2);

  if (k1 <= root.val && root.val <= k2) {
    nums.push(root.val);
  }

  travel(root.right, nums, k1, k2);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [20, 8, 22, 4, 12];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(searchRange(binaryTreeRoot, 10, 22));
