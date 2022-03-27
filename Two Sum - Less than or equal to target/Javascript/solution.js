// https://www.lintcode.com/problem/609
// todo: why the below code work

function solution(nums, target) {
  nums = nums.sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      right--;
    } else {
      count += right - left;
      left++;
    }
  }

  return count;
}

console.log(solution([2, 7, 11, 15], 24));
