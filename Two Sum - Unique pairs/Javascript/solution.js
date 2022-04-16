// https://www.lintcode.com/problem/587/

function twoSum6(nums, target) {
  // 先对数据进行排序
  nums = nums.sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      count++;
      left++;
      right--;
    }

    if (sum > target) {
      right--;
    }

    if (sum < target) {
      left++;
    }

    // 以下是去重的逻辑 ( 要时刻注意数组访问的时候, 下标是否会越界 )
    while (left < right && left > 0 && nums[right] === nums[right + 1]) {
      right--;
    }

    // 以下是去重的逻辑 ( 要时刻注意数组访问的时候, 下标是否会越界 )
    while (left < right && right < nums.length - 1 && nums[left] === nums[left - 1]) {
      left++;
    }
  }

  return count;
}

console.log(twoSum6([7, 11, 11, 1, 2, 3, 4], 22));
