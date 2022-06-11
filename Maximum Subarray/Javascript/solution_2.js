// https://leetcode.cn/problems/maximum-subarray/
// https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

function maxSubArray(nums) {
  let max = nums[0];
  let total = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    let num = nums[i];
    if (total > 0) {
      total = total + num;
    } else {
      total = num;
    }
    max = Math.max(total, max);
  }

  return max;
}

// test cases
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
