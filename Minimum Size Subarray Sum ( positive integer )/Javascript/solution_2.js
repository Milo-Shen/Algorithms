// https://leetcode.cn/problems/2VG8Kg/
// https://www.lintcode.com/problem/406

function minSubArrayLen(target, nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 获取前缀和
  let prefix_sum_arr = prefix_sum(nums);

  // 最小方案的数组宽度
  let min_len = Infinity;

  for (let i = 0; i < nums_len; i++) {
    for (let j = i; j < nums_len; j++) {
      // 前缀和的应用
      //   - 使用前缀和数组在 O(1) 的时间复杂度内计算子数组的和
      //   - from i to j = prefix_sum_arr[j + 1] - prefix_sum_arr[i]
      let sum = prefix_sum_arr[j + 1] - prefix_sum_arr[i];
      if (sum >= target) {
        let len = j - i + 1;
        min_len = min_len > len ? len : min_len;
      }
    }
  }

  return min_len === Infinity ? 0 : min_len;
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
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
