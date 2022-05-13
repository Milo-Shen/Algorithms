// https://www.lintcode.com/problem/900
// https://leetcode.cn/problems/closest-binary-search-tree-value/

function closestValue(root, target) {
  let lowerNode = lowerBound(root, target);
  let upperNode = upperBound(root, target);

  if (!lowerNode) {
    return upperNode.val;
  }

  if (!upperNode) {
    return lowerNode.val;
  }

  if (target - lowerNode.val > upperNode.val - target) {
    return upperNode.val;
  }

  return lowerNode.val;
}

// 找到小于等于 target 的最大值
function lowerBound(root, target) {
  if (!root) {
    return null;
  }

  if (target < root.val) {
    return lowerBound(root.left, target);
  }

  // root.val <= target, 证明 root 已经是一个 lower bound
  // 继续在右子树中寻找更接近 target 的 lower bound
  let lowerNode = lowerBound(root.right, target);
  // 如果找到了更接近 target 的 lower bound, 则返回, 否则返回 root
  return lowerNode ? lowerNode : root;
}

// 找到大于 target 的最小值
function upperBound(root, target) {
  if (!root) {
    return null;
  }

  if (target >= root.val) {
    return upperBound(root.right, target);
  }

  // target < root.val, root.val 已经是一个 upper bound
  // 继续在左子树中寻找更接近 target 的 upper bound
  let upperNode = upperBound(root.left, target);
  // 如果找到了更接近 target 的 upper bound, 则返回, 否则返回 root
  return upperNode ? upperNode : root;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 5, 1, 3];
let target = 3.714286;
let binaryTreeRoot = buildBinaryTree(nums);
console.log(closestValue(binaryTreeRoot, target));
