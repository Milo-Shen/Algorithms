// https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x/

function specialArray(nums) {
  let nums_len = nums.length;

  for (let i = 0; i <= nums_len; i++) {
    let x = i;
    let count = 0;

    for (let j = 0; j < nums_len; j++) {
      if (nums[j] >= x) {
        count++;
      }
    }

    if (count === x) {
      return x;
    }
  }

  return -1;
}

console.log(specialArray([3, 5]));
