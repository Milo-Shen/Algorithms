// https://leetcode-cn.com/problems/sort-colors/submissions/
// https://www.lintcode.com/problem/148/description

function solution_1(nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;

  while (middle <= right) {
    if (nums[middle] === 0) {
      swap(nums, left, middle);
      left++;
      middle++;
    } else if (nums[middle] === 2) {
      swap(nums, right, middle);
      right--;
    } else {
      middle++;
    }
  }
}

function swap(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

let nums = [1, 0, 1, 2];
solution_1(nums);
console.log(nums);
