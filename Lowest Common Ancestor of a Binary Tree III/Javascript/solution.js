// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iii/
// https://www.lintcode.com/problem/474/

function lowestCommonAncestor(p, q) {
  let set = new Set();
  // 一直访问 p 的父节点, 直到为 Null 为止
  let cur = p;
  while (cur) {
    set.add(cur);
    cur = cur.parent;
  }

  // 一直访问 q 的父节点, 直到找到第一个在 p 的祖先里出现过的元素为止
  cur = q;
  while (cur) {
    if (set.has(cur)) {
      return cur;
    }
    cur = cur.parent;
  }

  return null;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
let binaryTree = buildBinaryTree(nums);
console.log(lowestCommonAncestor(binaryTree.left, binaryTree.right).val);
