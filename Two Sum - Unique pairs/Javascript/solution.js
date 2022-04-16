// https://www.lintcode.com/problem/587/

function twoSum6(nums, target) {
  nums = nums.sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      count++;
      left++;
      right--;
    }

    if (sum > target) {
      right--;
    }

    if (sum < target) {
      left++;
    }

    while (left < right && nums[right] === nums[right + 1]) {
      right--;
    }

    while (left < right && nums[left] === nums[left - 1]) {
      left++;
    }
  }

  return count;
}

console.log(twoSum6([1, 1, 2, 45, 46, 46], 47));
