// https://leetcode.cn/problems/2VG8Kg/
// https://www.lintcode.com/problem/406

function minSubArrayLen(target, nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // todo: 使用二分法
}

// test cases
let target = 213;
let nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
console.log(minSubArrayLen(target, nums));
