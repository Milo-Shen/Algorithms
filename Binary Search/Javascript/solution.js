// https://leetcode-cn.com/problems/binary-search/
// https://www.lintcode.com/problem/457/

function find_position(nums, target) {
  return binary_search(nums, 0, nums.length - 1, target);
}

function binary_search(nums, start, end, target) {
  if (start > end) {
    return -1;
  }

  let middle = ~~((start + end) / 2);

  if (target === nums[middle]) {
    return middle;
  }

  if (target < nums[middle]) {
    return binary_search(nums, start, middle - 1, target);
  }

  if (target > nums[middle]) {
    return binary_search(nums, middle + 1, end, target);
  }
}

console.log(find_position([1, 2, 2, 4, 5, 5], 5));
