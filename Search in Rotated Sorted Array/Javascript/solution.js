// https://www.lintcode.com/problem/62/
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

function search(nums, target) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let min = findMinPos(nums);

  let is_in_right = nums[min] <= target && target <= nums[nums_len - 1];
  let left = is_in_right ? min : 0;
  let right = is_in_right ? nums_len - 1 : min - 1;
  return binary_search(nums, left, right, target);
}

/**
 * function: find the min number position in array
 * @param nums
 * @returns {number}
 */
function findMinPos(nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let start = 0;
  let end = nums_len - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] >= nums[end]) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return nums[start] > nums[end] ? end : start;
}

/**
 * function: binary search
 * @param nums
 * @param left
 * @param right
 * @param target
 * @returns {number|*}
 */
function binary_search(nums, left, right, target) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let start = left;
  let end = right;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (nums[start] === target) {
    return start;
  }

  if (nums[end] === target) {
    return end;
  }

  return -1;
}

let nums = [3, 1];
let target = 3;
console.log(search(nums, target));
