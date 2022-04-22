// https://www.lintcode.com/problem/628/

function findSubtree(root) {
  if (!root) {
    return 0;
  }

  let max_arr = [root];
  divideConquer(root, max_arr);
  return max_arr[0].val;
}

function divideConquer(root, max) {
  if (!root) {
    return 0;
  }

  let left_sum = divideConquer(root.left, max);
  let right_sum = divideConquer(root.right, max);
  let total = root.val + left_sum + right_sum;
  if (total > max[0].val) {
    max.unshift(root);
  }
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, -5, 2, 1, 2, -4, -5];
let binaryTree = buildBinaryTree(nums);
console.log(findSubtree(binaryTree));
