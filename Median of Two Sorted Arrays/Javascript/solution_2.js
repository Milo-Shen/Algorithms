// https://leetcode.cn/problems/median-of-two-sorted-arrays/
// https://www.lintcode.com/problem/65/

const findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2].sort((a, b) => a - b);
  let len = nums.length;
  let half = ~~(len / 2);

  if (len % 2 === 0) {
    return (nums[half - 1] + nums[half]) / 2;
  } else {
    return nums[half];
  }
};

const nums1 = [1, 2, 3, 4, 5, 6];
const nums2 = [2, 3, 4, 5];
console.log(findMedianSortedArrays(nums1, nums2));
