// https://www.lintcode.com/problem/610/

// 采用同向双指针的解法
function twoSum7(nums, target) {
  let len = nums.length;
  target = Math.abs(target);

  let j = 1;

  for (let i = 0; i < len; i++) {
    j = Math.max(j, i + 1);
    while (nums[j] - nums[i] < target) {
      j++;
    }

    if (j >= len) {
      break;
    }

    if (nums[j] - nums[i] === target) {
      return [nums[i], nums[j]];
    }
  }

  return [-1, -1];
}

let nums = [0, 5, 7];
let target = -2;
console.log(twoSum7(nums, target));
