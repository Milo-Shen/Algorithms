// https://leetcode.cn/problems/largest-number-at-least-twice-of-others/

const dominantIndex = function (nums) {
  let max_1 = -Infinity;
  let max_2 = -Infinity;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max_1) {
      max_2 = max_1;
      max_1 = nums[i];
      index = i;
    } else if (nums[i] > max_2) {
      max_2 = nums[i];
    }
  }

  return max_1 >= max_2 * 2 ? index : -1;
};

console.log(dominantIndex([0, 0, 3, 2]));
