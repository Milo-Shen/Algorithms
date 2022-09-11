// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

function subsetXORSum(nums) {
  let result = { sum: 0 };
  if (!nums) {
    return result.sum;
  }

  dfs(nums, 0, [], result);

  return result.sum;
}

// 1. 递归的定义
function dfs(nums, start_index, subset, result) {
  result.sum += subset.reduce((a, b) => a ^ b, 0);

  for (let i = start_index; i < nums.length; i++) {
    subset.push(nums[i]);
    dfs(nums, i + 1, subset, result);
    subset.pop();
  }
}

// test cases
console.log(subsetXORSum([1, 3]));
