// https://leetcode-cn.com/problems/find-the-kth-largest-integer-in-the-array/
function solution_string(k, nums) {
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
    while (left <= right && string_compare_bigger(nums[left], pivot)) {
      left++;
    }

    while (left <= right && string_compare_smaller(nums[right], pivot)) {
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

function string_compare_bigger(a, b) {
  return a.length === b.length ? a > b : a.length > b.length;
}

function string_compare_smaller(a, b) {
  return a.length === b.length ? a < b : a.length < b.length;
}

console.log(solution_string(4, ['3', '6', '7', '10']));
