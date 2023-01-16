// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

function subsets(nums) {
  let result = [];
  if (!nums) {
    return [[]];
  }

  // 如果不要求从小到大顺序的话, 这行可以省略
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
let nums = [1, 2, 3];
console.log(subsets(nums));
