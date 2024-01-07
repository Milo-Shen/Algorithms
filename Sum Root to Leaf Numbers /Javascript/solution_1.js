// https://leetcode.cn/problems/sum-root-to-leaf-numbers/
const sumNumbers = function (root) {
  let nums = [];

  divideConquer(root, nums, [root.val]);

  return nums.reduce((a, b) => a + b);
};

const divideConquer = function (root, result, temp) {
  if (!root) {
    return;
  }

  if (!root.left && !root.right) {
    let num = 0;
    for (let i = 0; i < temp.length; i++) {
      num = num * 10 + temp[i];
    }

    result.push(num);
    return;
  }

  if (root.left) {
    divideConquer(root.left, result, [...temp, root.left.val]);
  }

  if (root.right) {
    divideConquer(root.right, result, [...temp, root.right.val]);
  }
};

const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 9, 0, 5, 1];
let root = buildBinaryTree(nums);

console.log(sumNumbers(root));
