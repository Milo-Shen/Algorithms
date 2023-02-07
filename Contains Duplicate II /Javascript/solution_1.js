// https://leetcode.cn/problems/contains-duplicate-ii/

const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const num = nums[i];

    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }

    map.set(num, i);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
