// https://www.lintcode.com/problem/1844/

function subarraySumEqualsKII(nums, k) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return -1;
  }

  // 方案的数量
  let min_len = Infinity;

  // 初始化前缀和 map
  let sum_to_index = new Map();
  sum_to_index.set(0, 0);

  // 当前的前缀和
  let prefix_sum = 0;

  for (let i = 0; i < nums_len; i++) {
    prefix_sum = prefix_sum + nums[i];

    if (sum_to_index.has(prefix_sum - k)) {
      let j = sum_to_index.get(prefix_sum - k);
      let len = i - j + 1;
      min_len = min_len > len ? len : min_len;
    }

    sum_to_index.set(prefix_sum, i + 1);
  }

  return min_len === Infinity ? -1 : min_len;
}

// test cases
let A = [
  -4, -1, -6, 16, 13, 2, -1, -4, 6, 6, -9, 13, 3, -6, -6, 16, 8, -10, 2, 1, 0, 8, 6, 16, 11, 0, 10,
  -6, -5, 16,
];
let k = 12;
console.log(subarraySumEqualsKII(A, k));
