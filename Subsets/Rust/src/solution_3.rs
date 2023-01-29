// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut result: Vec<Vec<i32>> = Vec::new();

    if nums.is_empty() {
        return result;
    }

    let mut nums = nums;
    nums.sort();

    dfs(&nums, nums.len(), 0, &mut result, &mut Vec::new());

    result
}

// 1. 递归的定义
fn dfs(
    nums: &Vec<i32>,
    len: usize,
    index: usize,
    result: &mut Vec<Vec<i32>>,
    subsets: &mut Vec<i32>,
) {
    result.push(subsets.clone());

    for i in index..len {
        subsets.push(nums[i]);
        dfs(&nums, len, i + 1, result, subsets);
        subsets.pop();
    }
}
