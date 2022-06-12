// https://leetcode.cn/problems/2VG8Kg/
// https://leetcode.cn/problems/minimum-size-subarray-sum/
// https://www.lintcode.com/problem/1507

function minSubArrayLen(target, nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }
}

// test cases
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
