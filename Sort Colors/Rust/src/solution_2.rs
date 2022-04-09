// https://leetcode-cn.com/problems/sort-colors/submissions/
// https://www.lintcode.com/problem/148/description

pub fn solution(nums: &mut Vec<i32>) {
    let nums_len = nums.len();
    if nums_len == 0 {
        return;
    }

    partition_array(nums, 1);
    partition_array(nums, 2);
}

fn partition_array(nums: &mut Vec<i32>, k: i32) {
    let nums_len = nums.len();
    // 指向小于 k 区间的最后一个元素
    let mut last_small_pointer: i32 = -1;
    for i in 0..nums_len {
        if nums[i] < k {
            // 指针右移一位，指向当前元素应该去往的位置
            // 然后进行 swap
            last_small_pointer = last_small_pointer + 1;
            swap(nums, last_small_pointer as usize, i)
        }
    }
}

fn swap(nums: &mut Vec<i32>, left: usize, right: usize) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}