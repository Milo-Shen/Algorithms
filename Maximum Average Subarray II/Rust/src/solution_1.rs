// https://leetcode.cn/problems/maximum-average-subarray-ii/description/
pub fn find_max_average(nums: Vec<i32>, k: i32) -> f64 {
    let n = nums.len();

    let mut prefix_sum = vec![0; n + 1];

    for i in 0..n {
        prefix_sum[i + 1] = prefix_sum[i] + nums[i];
    }

    let mut max = f64::MIN;

    for i in k..=n as i32 {
        max = max.max(find_inner_max(&prefix_sum, n, i));
    }

    max
}

pub fn find_inner_max(prefix_sum: &Vec<i32>, n: usize, k: i32) -> f64 {
    let mut max = f64::MIN;
    let k = k as usize;

    for i in 0..=n - k {
        let j = i + k - 1;
        let sum = prefix_sum[j + 1] - prefix_sum[i];
        let average = sum as f64 / k as f64;
        max = max.max(average);
    }

    max
}
