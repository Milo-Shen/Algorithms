// https://leetcode.cn/problems/most-frequent-subtree-sum/

function findFrequentTreeSum(root) {
  // 异常检测
  if (!root) {
    return [];
  }

  let result = {
    list: [],
    max_len: -Infinity,
  };

  divideConquer(root, result);

  return result.list;
}

function divideConquer(root, max_list) {
  if (!root) {
    return 0;
  }

  let left_sum = divideConquer(root.left, max_list);
  let right_sum = divideConquer(root.right, max_list);
  let total = root.val + left_sum + right_sum;

  return total;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 2, -3];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(findFrequentTreeSum(binaryTreeRoot));
