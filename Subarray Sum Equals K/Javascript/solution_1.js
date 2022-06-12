// https://leetcode.cn/problems/subarray-sum-equals-k/
// https://www.lintcode.com/problem/1844/

function subarraySum(nums, k) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 获取前缀和
  let prefix_sum_arr = prefix_sum(nums);

  // 方案的数量
  let count = 0;

  for (let i = 0; i < nums_len; i++) {
    for (let j = i; j < nums_len; j++) {
      // 前缀和的应用
      //   - 使用前缀和数组在 O(1) 的时间复杂度内计算子数组的和
      //   - from i to j = prefix_sum_arr[j + 1] - prefix_sum_arr[i]
      let sum = prefix_sum_arr[j + 1] - prefix_sum_arr[i];
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

function prefix_sum(nums) {
  let prefix_sum_arr = [];
  prefix_sum_arr[0] = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    prefix_sum_arr[i + 1] = prefix_sum_arr[i] + nums[i];
  }

  return prefix_sum_arr;
}

// test cases
let A = [1, 1, 1];
let k = 2;
console.log(subarraySum(A, k));
