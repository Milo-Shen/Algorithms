// https://leetcode-cn.com/problems/sort-colors/submissions/
// https://www.lintcode.com/problem/148/description

function solution_2(nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return [];
  }

  partition_array(nums, 1);
  partition_array(nums, 2);
}

function partition_array(nums, k) {
  // 指向小于 k 区间的最后一个元素
  let last_small_pointer = -1;
  for (let i = 0, len = nums.length; i < len; i++) {
    // 如果 num[i] < k, 需要交换并右移指针
    if (nums[i] < k) {
      // 指针右移一位，指向当前元素应该去往的位置
      // 然后进行 swap
      last_small_pointer++;
      swap(nums, last_small_pointer, i);
    }
  }
}

function swap(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

let nums = [1, 0, 1, 2];
solution_2(nums);
console.log(nums);
