// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/

function getMinimumDifference(root) {
  let result = { min: Infinity };
  let pre_node = { node: null };
  dfs(root, pre_node, result);
  return result.min;
}

function dfs(root, pre_node, result) {
  if (!root) {
    return;
  }

  dfs(root.left, pre_node, result);

  if (pre_node.node) {
    result.min = Math.min(result.min, Math.abs(root.val - pre_node.node.val));
  }

  pre_node.node = root;

  dfs(root.right, pre_node, result);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [236, 104, 701, null, 227, null, 911];
let binaryTree = buildBinaryTree(nums);
console.log(getMinimumDifference(binaryTree));
