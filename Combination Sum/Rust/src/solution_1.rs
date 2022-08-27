// https://leetcode.cn/problems/combination-sum/
// https://www.lintcode.com/problem/135/

pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut result = Vec::new();
    let candidates_len = candidates.len();

    if candidates_len == 0 {
        return result;
    }

    let mut subset: Vec<i32> = Vec::new();

    // 对数组进行排序
    let mut candidates = candidates;
    candidates.sort();

    dfs(
        &candidates,
        candidates_len,
        0,
        target,
        &mut subset,
        &mut result,
    );

    result
}

// 递归三要素之一: 递归的定义
fn dfs(
    candidates: &Vec<i32>,
    candidates_len: usize,
    index: usize,
    target: i32,
    subset: &mut Vec<i32>,
    result: &mut Vec<Vec<i32>>,
) {
    // 递归三要素之三: 递归的出口, 已经找出和为 target 的一组结果
    if target == 0 {
        result.push(subset.clone());
        return;
    }

    // 递归要素之二: 递归的拆解, 挑一个数放入 current
    for i in index..candidates_len {
        // 如果剩余和比当前数字小, 不考虑当前数字之后更大的数字 ( 升序排列 )
        // 这个检测可以不在这里做, 也可以在下一层调用做
        if target < candidates[i] {
            return;
        }

        subset.push(candidates[i]);

        // 递归到下一层去选定下一个数字
        // 这里传入 1 而不是 i + 1, 下一层 dfs 可以重复使用位置的数字
        dfs(
            candidates,
            candidates_len,
            i,
            target - candidates[i],
            subset,
            result,
        );

        // 此处是回溯的操作
        subset.pop();
    }
}
