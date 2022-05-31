// https://leetcode.cn/problems/remove-element/

function removeElement(nums, val) {
  let j = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === val) {
      continue;
    }
    nums[j++] = nums[i];
  }

  return j;
}

// test cases
let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3), nums);
