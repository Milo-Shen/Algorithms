// https://www.lintcode.com/problem/632

function maxNode(root) {
  let max_node = { val: -Infinity, node: null };
  findMaxNode(root, max_node);
  return max_node.node;
}

function findMaxNode(root, max_node) {
  if (!root) {
    return;
  }

  if (root.val > max_node.val) {
    max_node.val = root.val;
    max_node.node = root;
  }
  findMaxNode(root.left, max_node);
  findMaxNode(root.right, max_node);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, -5, 3, 1, 2, -4, -5];
let binaryTree = buildBinaryTree(nums);
console.log(maxNode(binaryTree).val);
