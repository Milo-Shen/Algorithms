// https://leetcode.cn/problems/search-in-a-binary-search-tree/

function searchBST(root, val) {
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (val < node.val && node.left) {
      queue.push(node.left);
    }
    if (val > node.val && node.right) {
      queue.push(node.right);
    }
    if (val === node.val) {
      return node;
    }
  }

  return null;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 7, 1, 3];
let binaryTree = buildBinaryTree(nums);
console.log(searchBST(binaryTree, 5));
