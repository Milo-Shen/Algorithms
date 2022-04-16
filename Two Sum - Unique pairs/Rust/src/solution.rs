// https://www.lintcode.com/problem/587/

pub fn two_sum6(nums: Vec<i32>, target: i32) -> i32 {
    let nums_len = nums.len();
    if nums_len == 0 {
        return 0;
    }

    // 先对数据进行排序
    let mut nums = nums;
    nums.sort();

    let mut count = 0;
    let mut left = 0;
    let mut right = nums_len - 1;

    while left < right {
        let sum = nums[left as usize] + nums[right as usize];

        if sum == target {
            count = count + 1;
            left = left + 1;
            right = right - 1;
        }

        if sum > target {
            right = right - 1;
        }

        if sum < target {
            left = left + 1;
        }

        // 以下是去重的逻辑 ( 要时刻注意数组访问的时候, 下标是否会越界 )
        while left < right && left > 0 && nums[left as usize] == nums[(left - 1) as usize] {
            left = left + 1;
        }

        // 以下是去重的逻辑 ( 要时刻注意数组访问的时候, 下标是否会越界 )
        while left < right && right < nums_len - 1 && nums[right as usize] == nums[(right + 1) as usize] {
            right = right - 1;
        }
    }

    count
}