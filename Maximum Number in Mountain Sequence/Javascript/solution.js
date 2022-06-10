// https://www.lintcode.com/problem/585/
// 二分法，判断山脉趋势，按照取数递归左边或者右边即可。
// 山顶的条件是第一个使得 nums[i] > nums[i + 1] 的 i。
// 当然也可以反过来，最后一个使得 nums[i] > nums[i - 1] 的 i

// 山脉中的最大值 ( 这里是通过 mid 和 mid + 1 来比较 )
function mountain_sequence(nums) {
  let nums_len = nums.length;
  if (!nums || nums_len === 0) {
    return -1;
  }

  let start = 0;
  let end = nums_len - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return Math.max(nums[start], nums[end]);
}

console.log(mountain_sequence([1, 2, 4, 8, 6, 3]));
