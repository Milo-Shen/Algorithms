// https://leetcode.cn/problems/build-array-from-permutation/submissions/

pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
    let mut result = vec![];

    for i in 0..nums.len() {
        result.push(nums[nums[i] as usize]);
    }

    result
}