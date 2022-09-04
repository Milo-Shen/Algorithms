// https://leetcode.cn/problems/largest-unique-number/

function largestUniqueNumber(nums) {
  let count = [];

  for (let i = 0, len = nums.length; i < len; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }

  for (let i = 1000; i >= 0; i--) {
    if (count[i] === 1) {
      return i;
    }
  }

  return -1;
}

let nums = [11, 10, 11];
console.log(largestUniqueNumber(nums));
