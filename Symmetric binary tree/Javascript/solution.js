// https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/

function isSymmetric(root) {
  if (!root) {
    return true;
  }
  return divideConquer(root.left, root.right);
}

function divideConquer(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (!root1 || !root2) {
    return false;
  }

  return (
    root1.val === root2.val &&
    divideConquer(root1.left, root2.right) &&
    divideConquer(root1.right, root2.left)
  );
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 2, 3, 4, 4, 3];
let binaryTree = buildBinaryTree(nums);
console.log(isSymmetric(binaryTree, 5));
