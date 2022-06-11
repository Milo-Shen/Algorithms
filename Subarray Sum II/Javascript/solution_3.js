// https://www.lintcode.com/problem/404/

function subarraySumII(a, start, end) {
  let nums_len = a.length;

  // 异常处理
  if (!a || !nums_len || start > end) {
    return [];
  }

  // 获取前缀和
  let prefix_sum_arr = prefix_sum(a);

  let count = 0;

  for (let i = 0; i < nums_len; ++i) {
    let min_j = i;
    let max_j = i;

    // 退出循环的时候, min_j 正好是符合要求的最小的 right 值
    while (prefix_sum_arr[min_j + 1] - prefix_sum_arr[i] < start) {
      min_j++;
    }

    // 退出循环的时候, max_j 比符合要求的最大的 right 值大 1
    while (prefix_sum_arr[max_j + 1] - prefix_sum_arr[i] <= end) {
      max_j++;
    }

    // 所以方案的数量为 max_j - min_j
    count += max_j - min_j;
  }

  return count;
}

// 计算数组的前缀和
function prefix_sum(nums) {
  // 前缀和的定义
  //   - 构造一个长度为 n + 1 的数组 prefix_sum_arr
  //   - prefix_sum_arr[i] 代表前 i 个数字的和, prefix_sum_arr[0] = 0
  // 构造前缀和
  //   - 当前前缀和 = 之前前缀和 + 当前元素
  //   - prefix_sum_arr[i] = prefix_sum_arr[i - 1] + arr[i - 1]
  // 前缀和的应用
  //   - 使用前缀和数组在 O(1) 的时间复杂度内计算子数组的和
  //   - from i to j = prefix_sum_arr[j + 1] - prefix_sum_arr[i]

  let prefix_sum_arr = [];
  prefix_sum_arr[0] = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    prefix_sum_arr[i + 1] = prefix_sum_arr[i] + nums[i];
  }

  return prefix_sum_arr;
}

// test cases
let A = [1, 2, 3, 4];
let start = 1;
let end = 3;
console.log(subarraySumII(A, start, end));
