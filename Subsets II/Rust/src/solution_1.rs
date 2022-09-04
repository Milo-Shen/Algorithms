// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

pub fn subsets_with_dup(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut result = Vec::new();

    // 异常处理
    let nums_len = nums.len();
    if nums_len == 0 {
        return result;
    }

    let mut nums = nums;
    nums.sort();

    dfs(&nums, nums_len, 0, &mut Vec::new(), &mut result);

    result
}

fn dfs(nums: &Vec<i32>, nums_len: usize, start_index: usize, subsets: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
    result.push(subsets.clone());

    for i in start_index..nums_len {
        // 这种情况下元素的排布为 start_index - 1 ... start_index + 1
        // 这种情况下 nums[i - 1] 并没有被放入 subsets 里面
        // 这种情况下出现了挑选了第二个 1 没有挑选第一个 1 的情况，这种情况需要去重
        if i != 0 && nums[i] == nums[i - 1] && i > start_index {
            continue;
        }

        subsets.push(nums[i]);
        dfs(nums, nums_len, i + 1, subsets, result);
        subsets.pop();
    }
}