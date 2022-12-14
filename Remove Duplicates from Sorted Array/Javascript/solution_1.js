// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// https://www.lintcode.com/problem/521/description

const removeDuplicates = function (nums) {
  let i;
  let j = 1;
  let nums_len = nums.length;

  for (i = 0; i < nums_len; i++) {
    j = Math.max(i + 1, j);

    while (j < nums_len && nums[i] === nums[j]) {
      j++;
    }

    if (j >= nums_len) {
      break;
    }

    nums[i + 1] = nums[j];
  }

  return i + 1;
};

let nums = [0, 1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums), nums);