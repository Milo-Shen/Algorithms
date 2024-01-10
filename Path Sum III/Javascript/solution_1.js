// https://leetcode.cn/problems/path-sum-iii/description/

const pathSum = function (root, targetSum) {
  if (!root) {
    return 0;
  }

  let result = { total: 0 };

  let queue = [root];
  while (queue.length) {
    let node = queue.shift();

    dfs(node, node.val, [node.val], targetSum, result);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result.total;
};

const dfs = function (root, sum, path, targetSum, result) {
  if (!root) {
    return;
  }

  if (path.reduce((a, b) => a + b) === targetSum) {
    result.total++;
  }

  if (root.left) {
    dfs(root.left, sum + root.left.val, [...path, root.left.val], targetSum, result);
  }

  if (root.right) {
    dfs(root.right, sum + root.right.val, [...path, root.right.val], targetSum, result);
  }
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
let binaryTree = buildBinaryTree(nums);
console.log(pathSum(binaryTree, 8));
