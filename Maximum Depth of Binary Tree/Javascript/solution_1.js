// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/submissions/
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// https://www.lintcode.com/problem/97/

function max_depth(root) {
  if (!root) {
    return 0;
  }

  let left_depth = max_depth(root.left);
  let right_depth = max_depth(root.right);
  return Math.max(left_depth, right_depth) + 1;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 3, '#', '#', 4, 5];
let binaryTree = buildBinaryTree(nums);
console.log(max_depth(binaryTree));
