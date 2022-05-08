// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
// https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
// https://www.lintcode.com/problem/88/

function lowestCommonAncestor(root, p, q) {
  return divideConquer(root, p, q);
}

function divideConquer(root, p, q) {
  if (!root) {
    return null;
  }

  if (root === p || root === q) {
    return root;
  }

  let left = divideConquer(root.left, p, q);
  let right = divideConquer(root.right, p, q);

  if (left && right) {
    return root;
  }

  if (left) {
    return left;
  }

  if (right) {
    return right;
  }

  return null;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
let binaryTree = buildBinaryTree(nums);
console.log(lowestCommonAncestor(binaryTree, binaryTree.left, binaryTree.right).val);
