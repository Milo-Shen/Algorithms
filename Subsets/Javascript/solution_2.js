// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

function subsets(nums) {
  let result = [];
  if (!nums) {
    return result;
  }

  nums = nums.sort((a, b) => a - b);
  dfs(nums, 0, [], result);

  return result;
}

// 1. 递归的定义
function dfs(nums, start_index, subset, result) {
  result.push([...subset]);

  for (let i = start_index; i < nums.length; i++) {
    subset.push(nums[i]);
    dfs(nums, i + 1, subset, result);
    subset.pop();
  }
}

// test cases
let nums = [];
console.log(subsets(nums));
