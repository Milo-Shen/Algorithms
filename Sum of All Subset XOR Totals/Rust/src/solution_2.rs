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
    let mut temp = 0;

    for value in subsets.iter() {
        temp = temp ^ (*value);
    }

    *sum = *sum + temp;

    for i in start_index..num_len {
        subsets.push(nums[i]);
        dfs(nums, num_len, i + 1, subsets, sum);
        subsets.pop();
    }
}