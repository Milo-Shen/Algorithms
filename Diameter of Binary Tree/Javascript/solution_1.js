// https://leetcode.cn/problems/diameter-of-binary-tree/

function diameterOfBinaryTree(root) {
  let max = { val: -Infinity };

  depth(root, max);

  // 直径长度 = 经过的结点数最大值 - 1
  return max.val - 1;
}

const depth = (root, max) => {
  if (root === null) {
    return 0;
  }
  let left = depth(root.left, max);
  let right = depth(root.right, max);

  // 经过的结点数 = 某个结点左子树深度 + 右子树深度 + 1 (此节点本身)
  // 当前经过的结点数最大值 = Math.max(当前经过的结点数, 上一轮经过的结点数最大值)
  max.val = Math.max(left + right + 1, max.val);
  return Math.max(left, right) + 1;
};

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 9, 20, null, null, 15, 7];
let binaryTree = buildBinaryTree(nums);
console.log(diameterOfBinaryTree(binaryTree));
