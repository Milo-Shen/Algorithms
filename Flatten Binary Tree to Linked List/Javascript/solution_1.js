// https://www.lintcode.com/problem/453/
// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/

function flatten(root) {
  let queue = [];
  dfs(root, queue);
  let flatten_root = queue[0];
  let cur_node = flatten_root;
  for (let i = 1, len = queue.length; i < len; i++) {
    cur_node.left = null;
    cur_node.right = queue[i];
    cur_node = cur_node.right;
  }
  return flatten_root;
}

function dfs(root, queue) {
  if (!root) {
    return;
  }
  queue.push(root);
  dfs(root.left, queue);
  dfs(root.right, queue);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
const { serialize } = require('../../Serialize binary trees/Javascript/solution');
let nums = [1, 2, 5, 3, 4, null, 6];
let binaryTree = buildBinaryTree(nums);
console.log(serialize(flatten(binaryTree)));
