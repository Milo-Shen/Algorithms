// https://www.lintcode.com/problem/610/

function twoSum7(nums, target) {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let num1 = nums[i];
    let num2 = num1 + Math.abs(target);
    if (binary_search(nums, num2, i + 1) !== -1) {
      return [num1, num2];
    }
  }

  return [];
}

function binary_search(nums, target, start) {
  // 对数组进行空值检查
  let nums_len = nums.length;
  if (!nums || nums_len === 0) {
    return -1;
  }

  let left = start;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (nums[left] === target) {
    return left;
  }

  if (nums[right] === target) {
    return right;
  }

  return -1;
}

let nums = [0, 1, 2, 2];
let target = 0;
console.log(twoSum7(nums, target));
