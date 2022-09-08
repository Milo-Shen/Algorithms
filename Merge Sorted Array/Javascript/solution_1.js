// https://leetcode.cn/problems/merge-sorted-array/

function merge(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}
