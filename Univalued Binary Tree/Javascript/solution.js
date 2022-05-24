// https://leetcode.cn/problems/univalued-binary-tree/

function isUnivalTree(root) {
  if (!root) {
    return true;
  }

  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (root.val !== node.val) {
      return false;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return true;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 1, 1, 1, 1, null, 1];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(isUnivalTree(binaryTreeRoot));
