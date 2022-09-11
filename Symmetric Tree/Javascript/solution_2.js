// https://leetcode.cn/problems/symmetric-tree/

function isSymmetric(root) {
  let queue = [root];
  let level = 0;

  while (queue.length) {
    let len = queue.length;
    let temp = [];

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      temp.push(node?.val);

      if (node) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    if (!level_symmetric(temp, level)) {
      return false;
    }

    level++;
  }

  return true;
}

function level_symmetric(arr, level) {
  if (level === 0) {
    return true;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 0];
let root = buildBinaryTree(nums);
console.log(isSymmetric(root));
