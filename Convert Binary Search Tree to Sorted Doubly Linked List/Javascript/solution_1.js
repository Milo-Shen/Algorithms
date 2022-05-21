// https://leetcode.cn/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
function treeToDoublyList(root) {
  if (!root) {
    return null;
  }

  let arr = [];

  in_order_travel(root, arr);

  let list_root = arr[0];
  list_root.left = arr[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1].right = arr[i];
    arr[i].left = arr[i - 1];
  }

  arr[arr.length - 1].right = arr[0];

  return list_root;
}

function in_order_travel(root, arr) {
  if (!root) {
    return;
  }

  in_order_travel(root.left, arr);
  arr.push(root);
  in_order_travel(root.right, arr);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 5, 1, 3];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(treeToDoublyList(binaryTreeRoot));
