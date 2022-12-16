// https://www.lintcode.com/problem/610/

function twoSum7(nums, target) {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] - nums[i] === Math.abs(target)) {
        return [nums[i], nums[j]];
      }
    }
  }

  return [];
}

let nums = [0, 5, 7];
let target = -2;
console.log(twoSum7(nums, target));
