// https://leetcode.cn/problems/2VG8Kg/
// https://www.lintcode.com/problem/406

function minSubArrayLen(target, nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 最小方案的数组宽度
  let min_len = Infinity;

  for (let i = 0; i < nums_len; i++) {
    for (let j = i; j < nums_len; j++) {
      let sum = 0;

      for (let k = i; k <= j; k++) {
        sum = sum + nums[k];
      }

      if (sum >= target) {
        let len = j - i + 1;
        min_len = min_len > len ? len : min_len;
      }
    }
  }

  return min_len === Infinity ? 0 : min_len;
}

// test cases
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
