// https://www.lintcode.com/problem/62/
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

function search(nums, target) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let start = 0;
  let end = nums_len - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] >= nums[end]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid;
      }
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

let nums = [1001, 10001, 10007, 1, 10, 101, 201];
let target = 10001;
console.log(search(nums, target));
