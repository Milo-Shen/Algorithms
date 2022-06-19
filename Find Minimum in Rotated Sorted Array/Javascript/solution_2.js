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
    if (nums[mid] >= nums[0]) {
      start = mid;
    } else {
      end = mid;
    }
  }

  // 这里的 nums[0] 也需要做比较的理由是: 1 2 3 4
  return Math.min(nums[start], nums[end], nums[0]);
}

let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(arr));
