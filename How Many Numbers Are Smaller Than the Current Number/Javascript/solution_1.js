// https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = function (nums) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i < n; ++i) {
    let count = 0;
    for (let j = 0; j < n; ++j) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result[i] = count;
  }

  return result;
};

const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));
