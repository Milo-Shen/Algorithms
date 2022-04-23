// https://www.lintcode.com/problem/628/

let max_node = null;
let max_value = Number.MIN_VALUE;

function findSubtree(root) {
  if (!root) {
    return 0;
  }

  divideConquer(root);
  return max_node;
}

function divideConquer(root) {
  if (!root) {
    return 0;
  }

  let left_sum = divideConquer(root.left);
  let right_sum = divideConquer(root.right);
  let total = root.val + left_sum + right_sum;
  if (!max_node || total > max_value) {
    max_value = total;
    max_node = root;
  }

  return total;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, '#', 2];
let binaryTree = buildBinaryTree(nums);
console.log(findSubtree(binaryTree));
