// https://leetcode-cn.com/problems/kTOapQ/submissions/
// https://leetcode-cn.com/problems/binary-search-tree-iterator/submissions/
// https://www.lintcode.com/problem/86/

const BSTIterator = function (root) {
  this.stack = [];
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

BSTIterator.prototype.next = function () {
  if (!this.stack.length) {
    return null;
  }
  let cur_node = this.stack[this.stack.length - 1];
  let node = cur_node;
  // 如果当前节点没有右子树节点
  if (!node.right) {
    node = this.stack.pop();
    // 一直 pop 直到寻找到一个左子树关系
    while (this.stack.length && this.stack[this.stack.length - 1].right === node) {
      node = this.stack.pop();
    }
  } else {
    // 如果当前节点有右子树节点
    node = node.right;
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  return cur_node.val;
};

BSTIterator.prototype.hasNext = function () {
  return !!this.stack.length;
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [7, 3, 15, null, null, 9, 20];
let binaryTree = buildBinaryTree(nums);
let bst_iterator = new BSTIterator(binaryTree);
console.log(bst_iterator.next());
console.log(bst_iterator.next());
console.log(bst_iterator.next());
console.log(bst_iterator.next());
console.log(bst_iterator.next());