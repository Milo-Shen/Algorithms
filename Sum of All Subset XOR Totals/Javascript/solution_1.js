// https://leetcode.cn/problems/sum-of-all-subset-xor-totals/

function subsetXORSum(nums) {
  let result = { sum: 0 };
  if (!nums) {
    return [[]];
  }

  dfs(nums, 0, [], result);

  return result.sum;
}

// 1. 递归的定义
function dfs(nums, index, subset, result) {
  // 3. 递归的出口
  if (index === nums.length) {
    result.sum += subset.reduce((a, b) => a ^ b, 0);
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

console.log(subsetXORSum([1, 3]));
