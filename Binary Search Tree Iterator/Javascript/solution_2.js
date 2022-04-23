// https://leetcode-cn.com/problems/kTOapQ/submissions/
// https://leetcode-cn.com/problems/binary-search-tree-iterator/submissions/
// https://www.lintcode.com/problem/86/

// 一种更简单的实现方式
// 在 stack 中不保存那些已经被 iterator 访问过的节点
// 如果 iterator 到了这个节点, 即便右子树还未完全遍历, 也从 stack 里踢出
const BSTIterator = function (root) {
  this.stack = [];
  this.findMostLeft(root);
};

BSTIterator.prototype.findMostLeft = function (node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

BSTIterator.prototype.next = function () {
  if (!this.stack.length) {
    return null;
  }

  let node = this.stack.pop();
  if (node.right) {
    this.findMostLeft(node.right);
  }

  return node.val;
};

BSTIterator.prototype.hasNext = function () {
  return !!this.stack.length;
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 4, 2, 3];
let binaryTree = buildBinaryTree(nums);
