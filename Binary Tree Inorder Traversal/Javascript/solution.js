// https://leetcode.cn/problems/binary-tree-inorder-traversal/

function inorderTraversal(root) {
  let queue = [];
  let result = [];

  let cur_node = root;
  while (cur_node) {
    queue.push(cur_node);
    cur_node = cur_node.left;
  }

  while (queue.length) {
    let cur_node = queue.pop();
    result.push(cur_node.val);
    cur_node = cur_node.right;
    while (cur_node) {
      queue.push(cur_node);
      cur_node = cur_node.left;
    }
  }

  return result;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [236, 104, 701, null, 227, null, 911];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(inorderTraversal(binaryTreeRoot));
