// https://www.lintcode.com/problem/5
// todo: 需要理解 quick select 的思想

function solution_number(k, nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  return quick_select(nums, 0, nums_len - 1, k);
}

function quick_select(nums, start, end, k) {
  if (start === end) {
    return nums[start];
  }

  let left = start;
  let right = end;
  let pivot = nums[~~((left + right) / 2)];

  while (left <= right) {
    while (left <= right && nums[left] > pivot) {
      left++;
    }

    while (left <= right && nums[right] < pivot) {
      right--;
    }

    if (left <= right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }

  if (start + k - 1 <= right) {
    return quick_select(nums, start, right, k);
  }

  if (start + k - 1 >= left) {
    return quick_select(nums, left, end, k - (left - start));
  }

  return nums[right + 1];
}

console.log(solution_number(3, [9, 3, 2, 4, 8]));
