// https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/
function findSecondMinimumValue(root) {
  return helper(root, root.val);
}

function helper(root, min) {
  if (!root) {
    return -1;
  }

  // 如果当前结点值 > 根节点，那么不用再遍历它的子节点，直接返回该值
  if (root.val > min) {
    return root.val;
  }

  // 否则，即当前结点值 == 根节点, 则需要在两棵子树找目标值结点
  let left = helper(root.left, min);
  let right = helper(root.right, min);

  // 如果两棵子树均存在大于最小值的节点，那么返回较小的那一个
  if (left > min && right > min) {
    return Math.min(left, right);
  }

  // 否则，其余情况均返回较大的那一个
  return Math.max(left, right);
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 5, 6];
let binaryTree = buildBinaryTree(nums);
console.log(findSecondMinimumValue(binaryTree));
