// https://leetcode.cn/problems/longest-increasing-subsequence/
// https://www.lintcode.com/problem/76/

const lengthOfLIS = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  let n = nums.length;

  let lis = Array(n + 1).fill(Infinity);
  lis[0] = -Infinity;

  let longest = 0;
  for (let num of nums) {
    let index = first_gte(lis, num);
    lis[index] = num;
    longest = Math.max(longest, index);
  }

  return longest;
};

const first_gte = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (nums[start] >= target) {
    return start;
  }

  return end;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
