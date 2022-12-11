// https://leetcode.cn/problems/minimize-product-sum-of-two-arrays/

const minProductSum = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  let answer = 0;
  let length = nums1.length;

  for (let i = 0; i < length; i++) {
    answer += nums1[i] * nums2[length - 1 - i];
  }

  return answer;
};

let nums1 = [5, 3, 4, 2];
let nums2 = [4, 2, 2, 5];
console.log(minProductSum(nums1, nums2));
