// https://leetcode.cn/problems/search-in-a-binary-search-tree/
// https://www.lintcode.com/problem/1524

function searchBST(root, val) {
  if (!root) {
    return null;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }

  if (val > root.val) {
    return searchBST(root.right, val);
  }

  return root;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 7, 1, 3];
let binaryTree = buildBinaryTree(nums);
console.log(searchBST(binaryTree, 20));
