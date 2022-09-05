// https://leetcode.cn/problems/combination-sum-iv/

pub fn combination_sum4(nums: Vec<i32>, target: i32) -> i32 {
    let mut result = 0;
    let nums_len = nums.len();

    if nums_len == 0 {
        return 0;
    }

    // 对数组进行排序
    let mut nums = nums;
    nums.sort();

    dfs(
        &nums,
        nums_len,
        target,
        &mut result,
    );

    result
}

// 递归三要素之一: 递归的定义
fn dfs(
    nums: &Vec<i32>,
    nums_len: usize,
    target: i32,
    result: &mut i32,
) {
    // 递归三要素之三: 递归的出口, 已经找出和为 target 的一组结果
    if target == 0 {
        *result = *result + 1;
        return;
    }

    // 递归要素之二: 递归的拆解, 挑一个数放入 current
    for i in 0..nums_len {
        // 如果剩余和比当前数字小, 不考虑当前数字之后更大的数字 ( 升序排列 )
        // 这个检测可以不在这里做, 也可以在下一层调用做
        if target < nums[i] {
            return;
        }

        // 递归到下一层去选定下一个数字
        // 这里传入 1 而不是 i + 1, 下一层 dfs 可以重复使用位置的数字
        dfs(
            nums,
            nums_len,
            target - nums[i],
            result,
        );
    }
}
