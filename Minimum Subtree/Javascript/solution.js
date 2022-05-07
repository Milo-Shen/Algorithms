// https://www.lintcode.com/problem/596/

function findSubtree(root) {
  let min_node = { total: Infinity, node: null };
  minSubTree(root, min_node);
  return min_node.node;
}

function minSubTree(root, min_node) {
  if (!root) {
    return 0;
  }
  let val = root.val;
  let left_node = minSubTree(root.left, min_node);
  let right_node = minSubTree(root.right, min_node);
  let total = left_node + right_node + val;
  if (min_node.total > total) {
    min_node.total = total;
    min_node.node = root;
  }
  return total;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, -5, 2, 1, 2, -4, -5];
let binaryTree = buildBinaryTree(nums);
console.log(findSubtree(binaryTree).val);
