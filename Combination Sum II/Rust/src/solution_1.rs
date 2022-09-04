// https://leetcode.cn/problems/combination-sum-ii/
// https://www.lintcode.com/problem/153

pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut result = Vec::new();

    // 对数组进行排序
    let mut candidates = candidates;
    candidates.sort();

    // 异常处理
    let candidates_len = candidates.len();
    if candidates_len == 0 {
        return result;
    }

    dfs(&candidates, candidates_len, 0, target, &mut Vec::new(), &mut result);

    result
}

fn dfs(candidates: &Vec<i32>, len: usize, start_index: usize, target: i32, subsets: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
    if target == 0 {
        result.push(subsets.clone());
        return;
    }

    for i in start_index..len {
        if i != 0 && candidates[i] == candidates[i - 1] && i != start_index {
            continue;
        }

        if target < candidates[i] {
            return;
        }

        subsets.push(candidates[i]);
        dfs(candidates, len, start_index + 1, target - candidates[i], subsets, result);
        subsets.pop();
    }
}