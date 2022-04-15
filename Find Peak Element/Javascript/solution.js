// https://www.lintcode.com/problem/75/
// https://leetcode-cn.com/problems/find-peak-element/

function findPeakElement(nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let start = 0;
  let end = nums_len - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[mid - 1]) {
      start = mid;
    } else if (nums[mid] < nums[mid - 1]) {
      end = mid;
    } else {
      return mid;
    }
  }

  return nums[start] > nums[end] ? start : end;
}

let arr = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(arr));
