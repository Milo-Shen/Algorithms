// https://www.lintcode.com/problem/376/
// https://leetcode-cn.com/problems/path-sum/submissions/

function binaryTreePathSum(root) {
  if (!root) {
    return [];
  }

  let temp = [];
  let paths = [];

  temp.push(root);
  findPath(root, temp, paths);

  return paths;
}

function findPath(root, temp, paths) {
  if (!root) {
    return;
  }

  if (!root.left && !root.right) {
    let num_arr = temp.map((x) => x.val);
    paths.push(num_arr.join('->'));
  }

  temp.push(root.left);
  findPath(root.left, temp, paths);
  temp.pop();

  temp.push(root.right);
  findPath(root.right, temp, paths);
  temp.pop();
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 4, 2, 3];
let binaryTree = buildBinaryTree(nums);
console.log(binaryTreePathSum(binaryTree, 5));
