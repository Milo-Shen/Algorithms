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
function dfs(nums, index, subset, result) {
  // 3. 递归的出口
  if (index === nums.length) {
    result.push([...subset]);
    return;
  }

  // 2. 递归的拆解
  // 选 nums[index]
  subset.push(nums[index]);
  dfs(nums, index + 1, subset, result);

  // 不选 nums[index]
  subset.pop();
  dfs(nums, index + 1, subset, result);
}

// test cases
let nums = [1, 2, 3];
console.log(subsets(nums));
