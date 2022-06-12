// https://leetcode.cn/problems/contiguous-array/
// https://www.lintcode.com/problem/994/description

function findMaxLength(nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 将所有的 0 变成 -1
  for (let i = 0; i < nums_len; i++) {
    nums[i] = nums[i] || -1;
  }

  // 方案的数量
  let max_len = -Infinity;

  // 初始化前缀和 map
  let sum_to_index = new Map();
  sum_to_index.set(0, 0);

  // 当前的前缀和
  let prefix_sum = 0;

  for (let i = 0; i < nums_len; i++) {
    prefix_sum = prefix_sum + nums[i];

    if (sum_to_index.has(prefix_sum)) {
      let j = sum_to_index.get(prefix_sum);
      let len = i - j + 1;
      max_len = max_len < len ? len : max_len;
    } else {
      sum_to_index.set(prefix_sum, i + 1);
    }
  }

  return max_len === -Infinity ? 0 : max_len;
}

// test cases
let nums = [0, 1, 0];
console.log(findMaxLength(nums));
