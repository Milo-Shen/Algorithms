// https://leetcode.cn/problems/binary-tree-preorder-traversal/
// https://www.lintcode.com/problem/66/

// 非递归方式实现前序遍历时，首先存入当前节点值
// 然后先将右儿子压入栈中，再将左儿子压入栈中。对栈中元素遍历访问
function preorderTraversal(root) {
  let pre_order = [];
  if (!root) {
    return pre_order;
  }
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    pre_order.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return pre_order;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, null, 2, 3];
let binaryTree = buildBinaryTree(nums);
console.log(preorderTraversal(binaryTree));
