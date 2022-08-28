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
    if index == len {
        // 3. 递归的出口
        result.push(subsets.clone());
        return;
    }

    // 2. 递归的拆解
    // 选 nums[index]
    subsets.push(nums[index]);
    dfs(&nums, len, index + 1, result, subsets);

    // 不选 nums[index]
    subsets.pop();
    dfs(&nums, len, index + 1, result, subsets);
}
