// https://leetcode-cn.com/problems/largest-bst-subtree/

const largestBSTSubtree = function (root) {
  if (!root) {
    return 0;
  }

  // 求本节点
  // Javascript 里的最小值和最大值用 Number.MIN_VALUE 或 Number.MAX_VALUE 在比较的时候不安全
  // 会有错误的情况发生, 故而使用 -Infinity 来表示最小值, Infinity 来表示最大值更为稳妥
  if (is_bst(root, -Infinity, Infinity)) {
    return get_count(root);
  }

  // 求左叶子节点
  let L = largestBSTSubtree(root.left);

  // 求右叶子节点
  let R = largestBSTSubtree(root.right);

  return Math.max(L, R);
};

function is_bst(root, min, max) {
  if (!root) {
    return true;
  }

  return (
    min < root.val &&
    root.val < max &&
    is_bst(root.left, min, root.val) &&
    is_bst(root.right, root.val, max)
  );
}

function get_count(root) {
  if (!root) {
    return 0;
  }

  return 1 + get_count(root.left) + get_count(root.right);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 7, 2, 3, 5, null, 2, null, null, null, null, null, 1];
let binaryTree = buildBinaryTree(nums);
console.log(largestBSTSubtree(binaryTree));
