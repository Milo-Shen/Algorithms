// https://leetcode.cn/problems/concatenation-of-array/submissions/

pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
    let len = nums.len();
    let mut answer = vec![0; 2 * len];

    for i in 0..(2 * len) {
        answer[i] = nums[i % len];
    }

    answer
}