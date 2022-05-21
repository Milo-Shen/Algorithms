// https://www.lintcode.com/problem/16/
// https://leetcode.cn/problems/permutations-ii/

function permuteUnique(nums) {
  let nums_len = nums.length;
  let result = [];
  if (!nums || !nums_len) {
    return [[]];
  }

  nums = nums.sort((a, b) => a - b);
  let visited = Array(nums_len).fill(false);
  dfs(nums, visited, [], result);

  return result;
}

// 1. 递归的定义
function dfs(nums, visited, subset, result) {
  if (subset.length === nums.length) {
    result.push([...subset]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
      continue;
    }

    subset.push(nums[i]);
    visited[i] = true;
    dfs(nums, visited, subset, result);
    visited[i] = false;
    subset.pop();
  }
}

console.log(permuteUnique([1, 1, 2]));
