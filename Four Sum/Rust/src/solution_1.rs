// https://leetcode-cn.com/problems/4sum/submissions/
// https://www.lintcode.com/problem/58/

pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    // 对数组进行初始化检查
    let mut result: Vec<Vec<i32>> = Vec::new();
    let nums_len = nums.len();
    if nums_len < 4 {
        return result;
    }

    let mut nums = nums;
    nums.sort();

    // nums_len - 3 是因为，要至少留出 3 个数的数组进行 three sum
    for i in 0..nums_len - 3 {
        // 去重逻辑, 此处的 i > 0 不能省略
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }

        // nums_len - 2 是因为，要至少留出 2 个数的数组进行 two sum
        for j in i + 1..nums_len - 2 {
            if j > i + 1 && nums[j] == nums[j - 1] {
                continue;
            }

            // 进行 two sum 的操作
            let target = target - nums[i] - nums[j];
            two_sum(&nums, (j + 1) as i32, (nums_len - 1) as i32, target, i, j, &mut result);
        }
    }

    result
}

// 进行 two sum 操作
fn two_sum(nums: &Vec<i32>, mut left: i32, mut right: i32, target: i32, i: usize, j: usize, result: &mut Vec<Vec<i32>>) {
    while left < right {
        let two_sum = nums[left as usize] + nums[right as usize];

        if two_sum > target {
            right = right - 1;
        }

        if two_sum < target {
            left = left + 1;
        }

        if two_sum == target {
            result.push(vec![nums[i], nums[j], nums[left as usize], nums[right as usize]]);
            left = left + 1;
            right = right - 1;

            // 进行 two sum 的去重逻辑
            while left < right && nums[left as usize] == nums[(left - 1) as usize] {
                left = left + 1;
            }

            while left < right && nums[right as usize] == nums[(right + 1) as usize] {
                right = right - 1;
            }
        }
    }
}