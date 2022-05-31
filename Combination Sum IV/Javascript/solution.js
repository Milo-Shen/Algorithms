// https://leetcode.cn/problems/combination-sum-iv/

// todo: 下面这题不适合用 DFS，会爆栈
function combinationSum4(nums, target) {
  let nums_len = nums.length;

  let result = [];
  if (!nums || !nums_len) {
    return 0;
  }

  // 对数据进行去重排序
  nums = [...new Set(nums)].sort((a, b) => a - b);
  let visited = Array(nums_len).fill(false);

  dfs(nums, target, [], result, visited);

  return result.length;
}

function dfs(nums, target, subset, result, visited) {
  if (target === 0) {
    result.push([...subset]);
    return;
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    if (target < nums[i]) {
      continue;
    }

    subset.push(nums[i]);
    dfs(nums, target - nums[i], subset, result, visited);
    subset.pop();
  }
}

// test cases
let nums = [4, 2, 1];
console.log(combinationSum(nums, 32));
