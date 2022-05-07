// https://www.lintcode.com/problem/597

function findSubtree2(root) {
  let maxAverage = { val: -Infinity, node: null };
  divideConquer(root, maxAverage);
  return maxAverage.node;
}

function divideConquer(root, maxAverage) {
  if (!root) {
    return { node_count: 0, sum: 0 };
  }
  let val = root.val;
  let left_node = divideConquer(root.left, maxAverage);
  let right_node = divideConquer(root.right, maxAverage);
  let sum = left_node.sum + right_node.sum + val;
  let node_count = left_node.node_count + right_node.node_count + 1;
  let average = sum / node_count;
  if (average > maxAverage.val) {
    maxAverage.val = average;
    maxAverage.node = root;
  }

  return { node_count, sum };
}

// test data
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, -5, 11, 1, 2, 4, -2];
let binaryTree = buildBinaryTree(nums);
console.log(findSubtree2(binaryTree).val);
