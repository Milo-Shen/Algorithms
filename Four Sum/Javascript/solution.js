// https://leetcode-cn.com/problems/4sum/submissions/
// https://www.lintcode.com/problem/58/

function four_sum(nums, target) {
  let nums_len = nums.length;
  if (!nums || nums_len < 4) {
    return [];
  }

  let result = [];
  nums = nums.sort((a, b) => a - b);

  // len = nums_len - 3 是因为，要至少留出 3 个数的数组进行 three sum
  for (let i = 0, len = nums_len - 3; i < len; i++) {
    // 去重逻辑, 此处的 i > 0 不能省略
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, len = nums_len - 2; j < len; j++) {
      // 去重逻辑, 此处的 i > 0 不能省略
      if (j !== i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let two_sum_total = target - nums[i] - nums[j];
      two_sum(nums, j + 1, nums_len - 1, i, j, two_sum_total, result);
    }
  }

  return result;
}

// 计算两数之和
function two_sum(nums, left, right, i, j, target, result) {
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      result.push([nums[i], nums[j], nums[left], nums[right]]);
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

console.log(four_sum([1, 0, -1, 0, -2, 2], 0));
