// https://leetcode.cn/problems/2VG8Kg/
// https://www.lintcode.com/problem/406

function minSubArrayLen(target, nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 获取前缀和
  let prefix_sum_arr = prefix_sum(nums);

  // 最小值
  let min_len = Infinity;

  for (let start = 0; start < nums_len; start++) {
    let end = find_end_pos(prefix_sum_arr, start, target);
    if (prefix_sum_arr[end + 1] - prefix_sum_arr[start] >= target) {
      let len = end - start + 1;
      min_len = Math.min(min_len, len);
    }
  }

  return min_len === Infinity ? 0 : min_len;
}

function find_end_pos(prefix_sum, start, target) {
  let left = start;
  let right = prefix_sum.length - 2;

  while (left + 1 < right) {
    let mid = left + ~~((right - left) / 2);

    if (prefix_sum[mid + 1] - prefix_sum[start] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (prefix_sum[left + 1] - prefix_sum[start] >= target) {
    return left;
  }

  return right;
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
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
