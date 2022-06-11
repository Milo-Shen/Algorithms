// https://leetcode.cn/problems/maximum-subarray/
// https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

function maxSubArray(nums) {
  let nums_len = nums.length;
  let max = -Infinity;
  let prefix_sum_arr = prefix_sum(nums);

  for (let i = 0; i < nums_len; i++) {
    for (let j = i; j < nums_len; j++) {
      let sum = prefix_sum_arr[j + 1] - prefix_sum_arr[i];
      max = max < sum ? sum : max;
    }
  }

  return max;
}

function prefix_sum(nums) {
  let prefix_sum_arr = [];
  prefix_sum_arr[0] = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    prefix_sum_arr[i + 1] = prefix_sum_arr[i] + nums[i];
  }

  return prefix_sum_arr;
}

// test cases
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
