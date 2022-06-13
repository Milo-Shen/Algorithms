// https://leetcode.cn/problems/2VG8Kg/
// https://leetcode.cn/problems/minimum-size-subarray-sum/
// https://www.lintcode.com/problem/1507

function minSubArrayLen(target, nums) {
  let nums_len = nums.length;

  // 异常处理
  if (!nums || !nums_len) {
    return 0;
  }

  // 获取前缀和
  let prefix_sum_arr = prefix_sum(nums);

  // 在结果集上进行二分
  let start = 1;
  let end = nums_len;

  // 基本的二分法
  while (start + 1 < end) {
    let mid = start + ~~((end - start) / 2);

    if (isValid(prefix_sum_arr, target, mid)) {
      end = mid;
    } else {
      start = mid;
    }
  }

  // 寻找最短子数组, 所以先验证 start, 再验证 end
  if (isValid(prefix_sum_arr, target, start)) {
    return start;
  }

  if (isValid(prefix_sum_arr, target, end)) {
    return end;
  }

  return -1;
}

// 判断是否存在一个子数组, 满足: ( 子数组之和 >= target ) and 子数组长度 <= length
function isValid(prefix_sum, target, length) {
  // todo: finish it
}

// 构建前缀和
function prefix_sum(nums) {
  let prefix_sum_array = [];
  prefix_sum_array[0] = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    prefix_sum_array[i + 1] = prefix_sum_array[i] + nums[i];
  }

  return prefix_sum_array;
}

// test cases
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
