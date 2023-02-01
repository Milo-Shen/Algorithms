// https://leetcode.cn/problems/merge-sorted-array/

const merge = function (nums1, m, nums2, n) {
  let p = 0;
  let q = 0;
  let i = 0;

  let sorted = [];

  while (p < m && q < n) {
    if (nums1[p] < nums2[q]) {
      sorted[i++] = nums1[p];
      p++;
    } else {
      sorted[i++] = nums2[q];
      q++;
    }
  }

  while (p < m) {
    sorted[i++] = nums1[p];
    p++;
  }

  while (q < n) {
    sorted[i++] = nums2[q];
    q++;
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i];
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(merge(nums1, m, nums2, n));
