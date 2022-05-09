// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-ii/
// https://www.lintcode.com/problem/578/

function lowestCommonAncestor(root, p, q) {
  let { a_exist, b_exist, node } = divideConquer(root, p, q);
  if (a_exist && b_exist) {
    return node;
  }
  return null;
}

// 返回值: left exist, right exist, lca
function divideConquer(root, a, b) {
  if (!root) {
    return { a_exist: false, b_exist: false, node: null };
  }

  let {
    a_exist: left_a_exist,
    b_exist: left_b_exist,
    node: left_node,
  } = divideConquer(root.left, a, b);

  let {
    a_exist: right_a_exist,
    b_exist: right_b_exist,
    node: right_node,
  } = divideConquer(root.right, a, b);

  let a_exist = left_a_exist || right_a_exist || root === a;
  let b_exist = left_b_exist || right_b_exist || root === b;

  if (root === a || root === b) {
    return { a_exist, b_exist, node: root };
  }

  if (left_node && right_node) {
    return { a_exist, b_exist, node: root };
  }

  if (left_node) {
    return { a_exist, b_exist, node: left_node };
  }

  if (right_node) {
    return { a_exist, b_exist, node: right_node };
  }

  return { a_exist, b_exist, node: null };
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
let binaryTree = buildBinaryTree(nums);
console.log(lowestCommonAncestor(binaryTree, binaryTree.left, binaryTree.right).val);
