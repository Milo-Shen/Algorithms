// https://leetcode.cn/problems/median-of-two-sorted-arrays/
// https://www.lintcode.com/problem/65/

// 重点需要掌握 quick select
const findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length;
  let half = ~~(len / 2);

  // 偶数
  if (len % 2 === 0) {
    let left = findKth(nums1, 0, nums2, 0, half);
    let right = findKth(nums1, 0, nums2, 0, half + 1);
    return (left + right) / 2;
  }

  // 奇数
  return findKth(nums1, 0, nums2, 0, half + 1);
};

const findKth = function (A, startOfA, B, startOfB, k) {
  if (startOfA >= A.length) {
    return B[startOfB + k - 1];
  }

  if (startOfB >= B.length) {
    return A[startOfA + k - 1];
  }

  if (k === 1) {
    return Math.min(A[startOfA], B[startOfB]);
  }

  let half = ~~(k / 2);
  let halfKthOfA = startOfA + half - 1 < A.length ? A[startOfA + half - 1] : Infinity;
  let halfKthOfB = startOfB + half - 1 < B.length ? B[startOfB + half - 1] : Infinity;

  if (halfKthOfA < halfKthOfB) {
    return findKth(A, startOfA + half, B, startOfB, k - half);
  }

  return findKth(A, startOfA, B, startOfB + half, k - half);
};

const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2));
