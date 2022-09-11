// https://leetcode.cn/problems/sum-of-all-subset-xor-totals/

pub fn subset_xor_sum(nums: Vec<i32>) -> i32 {
    let mut sum = 0;
    let num_len = nums.len();

    // 异常检测
    if num_len == 0 {
        return sum;
    }

    dfs(&nums, num_len, 0, &mut Vec::new(), &mut sum);

    sum
}

fn dfs(nums: &Vec<i32>, num_len: usize, start_index: usize, subsets: &mut Vec<i32>, sum: &mut i32) {
    if start_index == num_len {
        let mut temp = 0;

        for value in subsets {
            temp = temp ^ (*value);
        }

        *sum = *sum + temp;
        return;
    }

    // 选 nums[index]
    subsets.push(nums[start_index]);
    dfs(nums, num_len, start_index + 1, subsets, sum);

    // 不选 nums[index]
    subsets.pop();
    dfs(nums, num_len, start_index + 1, subsets, sum);
}