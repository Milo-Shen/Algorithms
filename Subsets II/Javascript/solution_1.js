// https://www.lintcode.com/problem/18
// https://leetcode.cn/problems/subsets-ii/submissions/

function subsetsWithDup(nums) {
  let result = [];
  if (!nums) {
    return [[]];
  }

  let visited = new Set();

  nums = nums.sort((a, b) => a - b);
  dfs(nums, 0, [], result, visited);

  return result;
}

// 1. 递归的定义
function dfs(nums, index, subset, result, visited) {
  // 3. 递归的出口
  if (index === nums.length) {
    let flag = subset.join('-');

    if (visited.has(flag)) {
      return;
    }

    visited.add(flag);
    result.push([...subset]);
    return;
  }

  // 2. 递归的拆解
  // 选 nums[index]
  subset.push(nums[index]);
  dfs(nums, index + 1, subset, result, visited);

  // 不选 nums[index]
  subset.pop();
  dfs(nums, index + 1, subset, result, visited);
}

// test cases
let nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
