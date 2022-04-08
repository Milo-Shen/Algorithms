// https://www.lintcode.com/problem/144/

function re_range(nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return [];
  }

  let neg_count = partition(nums);
  let pos_count = nums_len - neg_count;
  let left = neg_count > pos_count ? 1 : 0;
  let right = nums_len - (neg_count < pos_count ? 2 : 1);
  swap(nums, left, right);

  return nums;
}

function partition(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (left <= right && nums[left] < 0) {
      left++;
    }
    while (left <= right && nums[right] > 0) {
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

function swap(nums, left, right) {
  while (left <= right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left += 2;
    right -= 2;
  }
}

console.log(re_range([-1, -2, -3, 4, 5, 6, 7, -8, 10]));
