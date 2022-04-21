// https://www.lintcode.com/problem/376/
// https://leetcode-cn.com/problems/path-sum/submissions/

// todo: 了解其分治法递归的实际运行结果
function binaryTreePathSum(root, target) {
  let result = [];

  if (!root) {
    return result;
  }

  if (!root.left && !root.right && root.val === target) {
    result.push([root.val]);
    return result;
  }

  // 这里的这个 if 加不加都行
  if (root.left) {
    let leftPath = binaryTreePathSum(root.left, target - root.val);
    for (let i = 0, len = leftPath.length; i < len; i++) {
      leftPath[i].unshift(root.val);
      result.push(leftPath[i]);
    }
  }

  // 这里的这个 if 加不加都行
  if (root.right) {
    let rightPath = binaryTreePathSum(root.right, target - root.val);
    for (let i = 0, len = rightPath.length; i < len; i++) {
      rightPath[i].unshift(root.val);
      result.push(rightPath[i]);
    }
  }

  return result;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
let binaryTree = buildBinaryTree(nums);
console.log(binaryTreePathSum(binaryTree, 22));
