// https://www.lintcode.com/problem/16/
// https://leetcode.cn/problems/permutations-ii/

function permuteUnique(nums) {
  let nums_len = nums.length;
  let result = [];
  if (!nums || !nums_len) {
    return [[]];
  }

  let visited = Array(nums_len).fill(false);
  let set = new Set();
  dfs(nums, visited, [], result, set);

  return result;
}

// 1. 递归的定义
function dfs(nums, visited, subset, result, set) {
  if (subset.length === nums.length) {
    let flag = subset.join('-');
    if (set.has(flag)) {
      return;
    }
    set.add(flag);
    result.push([...subset]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    subset.push(nums[i]);
    visited[i] = true;
    dfs(nums, visited, subset, result, set);
    visited[i] = false;
    subset.pop();
  }
}

console.log(permuteUnique([1, 1, 2]));
