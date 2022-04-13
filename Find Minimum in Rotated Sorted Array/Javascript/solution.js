// https://www.lintcode.com/problem/159/
// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums) {
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

  return Math.min(nums[start], nums[end]);
}

let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(arr));
