// https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/

function findSecondMinimumValue(root) {
  let min = root.val;

  let queue = [root];
  let temp = [];

  while (queue.length) {
    let node = queue.shift();
    temp.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  temp.sort();

  for (let i = 0, len = temp.length; i < len; i++) {
    if (min < temp[i]) {
      return temp[i];
    }
  }

  return -1;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 5, 6];
let binaryTree = buildBinaryTree(nums);
console.log(findSecondMinimumValue(binaryTree));
