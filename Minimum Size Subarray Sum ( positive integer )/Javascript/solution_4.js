// https://leetcode.cn/problems/2VG8Kg/
// https://www.lintcode.com/problem/406

function minSubArrayLen(target, nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 最小值
  let min_len = Infinity;

  // 当前的子数组和
  let subarray_sum = 0;

  // 使用同向双指针
  let end = 0;
  for (let start = 0; start < nums_len; start++) {
    while (end < nums_len && subarray_sum < target) {
      subarray_sum += nums[end];
      end += 1;
    }

    if (subarray_sum >= target) {
      min_len = Math.min(min_len, end - start);
    }

    subarray_sum -= nums[start];
  }

  return min_len === Infinity ? 0 : min_len;
}

// test cases
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
