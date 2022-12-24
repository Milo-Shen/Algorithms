// https://leetcode.cn/problems/subarray-product-less-than-k/submissions/

const numSubarrayProductLessThanK = function (nums, k) {
  let n = nums.length;
  let answer = 0;

  let prod = 1;
  let i = 0;

  for (let j = 0; j < n; j++) {
    prod *= nums[j];

    while (i <= j && prod >= k) {
      prod /= nums[i];
      i++;
    }

    answer += j - i + 1;
  }

  return answer;
};

console.log(numSubarrayProductLessThanK([10, 2, 2, 5, 4, 4, 4, 3, 7, 7], 289));
