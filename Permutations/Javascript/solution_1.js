// https://www.lintcode.com/problem/15/
// https://leetcode.cn/problems/permutations/

function permute(nums) {
  let nums_len = nums.length;
  let result = [];
  if (!nums || !nums_len) {
    return [[]];
  }

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

    subset.push(nums[i]);
    visited[i] = true;
    dfs(nums, visited, subset, result);
    visited[i] = false;
    subset.pop();
  }
}

console.log(permute([1, 2, 3]));
