// https://www.lintcode.com/problem/453/
// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/

function flatten(root) {
  flattenAndReturnLastNode(root);
  return root;
}

function flattenAndReturnLastNode(root) {
  if (!root) {
    return null;
  }

  let leftLast = flattenAndReturnLastNode(root.left);
  let rightLast = flattenAndReturnLastNode(root.right);

  if (root.left) {
    leftLast.right = root.right;
    root.right = root.left;
    root.left = null;
  }

  return rightLast || leftLast || root;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
const { serialize } = require('../../Serialize binary trees/Javascript/solution');
let nums = [1, 2, 5, 3, 4, null, 6];
let binaryTree = buildBinaryTree(nums);
console.log(serialize(flatten(binaryTree)));
