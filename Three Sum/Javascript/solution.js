// https://www.lintcode.com/problem/57/
// https://leetcode-cn.com/problems/3sum/

function three_sum(nums) {
  let nums_len = nums.length;
  if (!nums || nums_len < 3) {
    return [];
  }

  let result = [];
  nums = nums.sort((a, b) => a - b);
  // len = nums_len - 2 是因为，要至少留出 2 个数的数组进行 two sum
  for (let i = 0, len = nums_len - 2; i < len; i++) {
    // 去重逻辑, 此处的 i > 0 不能省略
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let two_sum_total = -nums[i];
    two_sum(nums, i + 1, nums_len - 1, two_sum_total, result);
  }

  return result;
}

function two_sum(nums, left, right, target, result) {
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      result.push([-target, nums[left], nums[right]]);
      left++;
      right--;

      // 去重逻辑
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }

      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    }

    if (sum < target) {
      left++;
    }

    if (sum > target) {
      right--;
    }
  }
}

console.log(three_sum([-1, 0, 1, 2, -1, -4]));
