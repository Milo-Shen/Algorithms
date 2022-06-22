// https://leetcode.cn/problems/find-bottom-left-tree-value/

function findBottomLeftValue(root) {
  // 逆序 BFS 二叉树
  let queue = [root];

  let node = root;
  while (queue.length) {
    node = queue.shift();

    if (node.right) {
      queue.push(node.right);
    }

    if (node.left) {
      queue.push(node.left);
    }
  }

  return node.val;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [2, 1, 3];
let binaryTree = buildBinaryTree(nums);
console.log(findBottomLeftValue(binaryTree));
