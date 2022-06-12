// https://leetcode.cn/problems/maximum-size-subarray-sum-equals-k/

function maxSubArrayLen(nums, k) {
  // 异常处理
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return 0;
  }

  // 前缀和
  let sum_to_index = new Map();
  sum_to_index.set(0, 0);

  // 当前前缀和
  let prefix_sum = 0;

  // 和等于 k 的最长子数组长度
  let max = -Infinity;

  for (let i = 0; i < nums_len; i++) {
    // 当前前缀和
    prefix_sum = prefix_sum + nums[i];

    if (sum_to_index.has(prefix_sum - k)) {
      let j = sum_to_index.get(prefix_sum - k);
      let len = i - j + 1;
      max = max < len ? len : max;
    } else {
      sum_to_index.set(prefix_sum, i + 1);
    }
  }

  return max === -Infinity ? 0 : max;
}

// test cases
let nums = [1, -1, 5, -2, 3];
let k = 3;
console.log(maxSubArrayLen(nums, k));
