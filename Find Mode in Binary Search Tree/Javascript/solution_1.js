// https://leetcode.cn/problems/find-mode-in-binary-search-tree/

function findMode(root) {
  let map = new Map();
  let max = 0;
  let result = [];

  let queue = [root];
  while (queue.length) {
    let node = queue.shift();

    let count = (map.get(node.val) || 0) + 1;
    map.set(node.val, count);
    max = Math.max(max, count);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  for (let [node, count] of map) {
    if (count !== max) continue;
    result.push(node);
  }

  return result;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, null, 2, 2];
let binaryTree = buildBinaryTree(nums);
console.log(findMode(binaryTree));
