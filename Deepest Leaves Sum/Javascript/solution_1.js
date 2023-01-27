// https://leetcode.cn/problems/deepest-leaves-sum/

const deepestLeavesSum = function (root) {
  if (!root) {
    return 0;
  }

  let queue = [root];
  let pre_sum = 0;

  while (queue.length) {
    let tmp_sum = 0;
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      tmp_sum += node.val;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    pre_sum = tmp_sum;
  }

  return pre_sum;
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8];
let binaryTree = buildBinaryTree(nums);
console.log(deepestLeavesSum(binaryTree));
