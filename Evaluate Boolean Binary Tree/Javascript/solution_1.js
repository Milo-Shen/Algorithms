// https://leetcode.cn/problems/evaluate-boolean-binary-tree/

const evaluateTree = function (root) {
  if (!root) {
    return true;
  }

  if (root.val === 0 || root.val === 1) {
    return !!root.val;
  }

  let left_child = evaluateTree(root.left);
  let right_child = evaluateTree(root.right);

  if (root.val === 2) {
    return left_child || right_child;
  }

  if (root.val === 3) {
    return left_child && right_child;
  }
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [2, 1, 3, null, null, 0, 1];
let binaryTree = buildBinaryTree(nums);
console.log(evaluateTree(binaryTree));
