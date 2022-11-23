// https://leetcode.cn/problems/minimum-distance-to-the-target-element/

const getMinDistance = function (nums, target, start) {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      continue;
    }

    min = Math.min(min, Math.abs(i - start));
  }

  return min;
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
