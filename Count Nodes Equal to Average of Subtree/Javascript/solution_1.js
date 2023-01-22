// https://leetcode.cn/problems/count-nodes-equal-to-average-of-subtree/

const averageOfSubtree = function (root) {
  let answer = { count: 0 };

  dfs(root, answer);

  return answer.count;
};

function dfs(root, answer) {
  if (!root) {
    return { sum: 0, count: 0 };
  }

  let { sum: left_sum, count: left_count } = dfs(root.left, answer);
  let { sum: right_sum, count: right_count } = dfs(root.right, answer);

  let sum = root.val + left_sum + right_sum;
  let count = left_count + right_count + 1;
  let average = ~~(sum / count);

  if (average === root.val) {
    answer.count++;
  }

  return { sum, count };
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 8, 5, 0, 1, null, 6];
let binaryTree = buildBinaryTree(nums);
console.log(averageOfSubtree(binaryTree));
