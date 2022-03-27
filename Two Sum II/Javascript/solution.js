// https://www.lintcode.com/problem/56/

function solution(nums, target) {
  if (!nums || nums.length === 0) {
    return [-1, -1];
  }
  nums = nums.map((x, index) => ({ index, value: x })).sort((a, b) => a.value - b.value);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let left_obj = nums[left];
    let right_obj = nums[right];
    let sum = left_obj.value + right_obj.value;
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left_obj.index, right_obj.index].sort();
    }
  }

  return [-1, -1];
}

console.log(solution([2, 3, 1], 4));
