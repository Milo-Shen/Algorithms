// https://leetcode.cn/problems/combinations/

pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
    let mut result: Vec<Vec<i32>> = Vec::new();

    dfs(n, k, 0, 1, &mut Vec::new(), &mut result);

    result
}

fn dfs(n: i32, k: i32, depth: i32, start_index: i32, subset: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
    if depth == k {
        result.push(subset.clone());
        return;
    }

    for i in start_index..(n + 1) {
        subset.push(i);
        dfs(n, k, depth + 1, i + 1, subset, result);
        subset.pop();
    }
}