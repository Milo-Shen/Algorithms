// https://leetcode.cn/problems/same-tree/

function isSameTree(p, q) {
  if (!p && !q) {
    return true;
  }

  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let p = [1, 2, 3];
let q = [1, 2, 3];
p = buildBinaryTree(p);
q = buildBinaryTree(q);
console.log(isSameTree(p, q));
