// https://www.lintcode.com/problem/610/

function twoSum7(nums, target) {
  let len = nums.length;
  let result = [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] - nums[i] === Math.abs(target)) {
        result = [nums[i], nums[j]];
      }
    }
  }

  return result;
}

let nums = [0, 5, 7];
let target = -2;
console.log(twoSum7(nums, target));
