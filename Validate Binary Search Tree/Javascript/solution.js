// https://leetcode.cn/problems/validate-binary-search-tree/

function isValidBST(root) {
  return isBST(root).isBST;
}

function isBST(root) {
  if (!root) {
    return { isBST: true, max: -Infinity, min: Infinity };
  }

  let { isBST: is_left_bst, max: left_max, min: left_min } = isBST(root.left);
  let { isBST: is_right_bst, max: right_max, min: right_min } = isBST(root.right);

  let left_max_valid = left_max < root.val;
  let right_min_valid = right_min > root.val;

  let isCurBsT = is_left_bst && is_right_bst && left_max_valid && right_min_valid;

  let max = Math.max(left_max, right_max, root.val);
  let min = Math.min(left_min, right_min, root.val);

  return { isBST: isCurBsT, max, min };
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 4, 6, null, null, 3, 7];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(isValidBST(binaryTreeRoot));
