// https://www.lintcode.com/problem/1844/

function subarraySum(nums, k) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 获取前缀和
  let prefix_sum_arr = prefix_sum(nums);

  // 方案的数量
  let min_len = Infinity;

  for (let i = 0; i < nums_len; i++) {
    for (let j = i; j < nums_len; j++) {
      // 前缀和的应用
      //   - 使用前缀和数组在 O(1) 的时间复杂度内计算子数组的和
      //   - from i to j = prefix_sum_arr[j + 1] - prefix_sum_arr[i]
      let sum = prefix_sum_arr[j + 1] - prefix_sum_arr[i];
      if (sum === k) {
        let len = j - i + 1;
        min_len = min_len > len ? len : min_len;
      }
    }
  }

  return min_len;
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
let A = [
  -4, -1, -6, 16, 13, 2, -1, -4, 6, 6, -9, 13, 3, -6, -6, 16, 8, -10, 2, 1, 0, 8, 6, 16, 11, 0, 10,
  -6, -5, 16,
];
let k = 12;
console.log(subarraySum(A, k));
