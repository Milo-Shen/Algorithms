// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets-ii/submissions/

function subsets(nums) {
  let result = [];
  if (!nums) {
    return [[]];
  }

  nums = nums.sort((a, b) => a - b);

  let visited = new Set();

  dfs(nums, 0, [], result, visited);

  return result;
}

// 1. 递归的定义
function dfs(nums, start_index, subset, result, visited) {
  let flag = subset.join('-');
  if (!visited.has(flag)) {
    result.push([...subset]);
  }

  visited.add(flag);

  for (let i = start_index; i < nums.length; i++) {
    subset.push(nums[i]);
    dfs(nums, i + 1, subset, result, visited);
    subset.pop();
  }
}

// test cases
let nums = [];
console.log(subsets(nums));
