// https://www.lintcode.com/problem/57/
// https://leetcode-cn.com/problems/3sum/

pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    // Rust 的 shadow 语法
    let mut nums = nums;

    // 空值检查
    let nums_len = nums.len();
    if nums_len < 3 {
        return vec![];
    }

    // 排序
    nums.sort();

    let mut result: Vec<Vec<i32>> = Vec::new();
    for i in 0..nums_len - 2 {
        // 去重逻辑
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }

        let two_sum_target = -nums[i];
        two_sum(&nums, (i + 1) as i32, (nums_len - 1) as i32, two_sum_target, &mut result);
    }

    result
}

fn two_sum(nums: &Vec<i32>, mut left: i32, mut right: i32, target: i32, result: &mut Vec<Vec<i32>>) {
    while left < right {
        let sum = nums[left as usize] + nums[right as usize];
        if sum == target {
            result.push(vec![-target, nums[left as usize], nums[right as usize]]);
            left = left + 1;
            right = right - 1;

            // 去重逻辑
            while left < right && nums[left as usize] == nums[(left - 1) as usize] {
                left = left + 1;
            }

            while left < right && nums[right as usize] == nums[(right + 1) as usize] {
                right = right - 1;
            }
        }
        if sum > target {
            right = right - 1;
        }
        if sum < target {
            left = left + 1;
        }
    }
}
