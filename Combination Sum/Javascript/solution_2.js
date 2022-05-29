// https://leetcode.cn/problems/combination-sum/
// https://www.lintcode.com/problem/135/

function combinationSum(candidates, target) {
  let result = [];
  if (!candidates) {
    return [[]];
  }

  // 对数据进行去重排序
  candidates = [...new Set(candidates)];
  candidates = candidates.sort((a, b) => a - b);
  dfs(candidates, 0, target, [], result);

  return result;
}

// 1. 递归的定义
function dfs(nums, index, target, subset, result) {
  // 3. 递归的出口
  if (index === nums.length) {
    return;
  }

  if (target === 0) {
    result.push([...subset]);
    return;
  }

  // 2. 递归的拆解
  // 不选当前数, 直接跳过
  dfs(nums, index + 1, target, subset, result);

  // 选择当前数
  if (target - nums[index] >= 0) {
    subset.push(nums[index]);
    dfs(nums, index, target - nums[index], subset, result);
    subset.pop();
  }
}

// test cases
let nums = [2, 3, 6, 7];
console.log(combinationSum(nums, 7));
