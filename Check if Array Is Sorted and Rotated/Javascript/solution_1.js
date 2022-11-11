// https://leetcode.cn/problems/check-if-array-is-sorted-and-rotated/

const check = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      count++;
    }
  }

  return count <= 1;
};

let nums = [3, 4, 5, 1, 2];

console.log(check(nums));
