// https://www.lintcode.com/problem/31/

function partitionArray(nums, k) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return 0;
  }

  let left = 0;
  let right = nums_len - 1;

  while (left <= right) {
    while (left <= right && nums[left] < k) {
      left++;
    }

    while (left <= right && nums[right] >= k) {
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

  return left;
}
