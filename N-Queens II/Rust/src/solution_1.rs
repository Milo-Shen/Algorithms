// https://leetcode.cn/problems/n-queens-ii/

use std::collections::HashSet;

pub fn total_n_queens(n: i32) -> i32 {
    // 异常检测
    if n <= 0 {
        return 0;
    }

    let mut result = Vec::new();
    let mut col_visited = HashSet::new();
    let mut sum_visited = HashSet::new();
    let mut diff_visited = HashSet::new();
    let mut answer = 0;

    search(&mut result, &mut Vec::new(), n as usize, &mut col_visited, &mut sum_visited, &mut diff_visited, &mut answer);

    answer
}

fn search(
    results: &mut Vec<Vec<String>>,
    cols: &mut Vec<usize>,
    n: usize,
    col_visited: &mut HashSet<i32>,
    sum_visited: &mut HashSet<i32>,
    diff_visited: &mut HashSet<i32>,
    answer: &mut i32,
) {
    // 若已经放置了 n 个皇后, 表示出现了一种解法, 绘制后加入答案 result
    if cols.len() == n {
        *answer += 1;
        return;
    }

    let row = cols.len() as i32;

    // 若已经放置了 n 个皇后表示出现了一种解法, 绘制后加入答案 result
    for col_index in 0..n {
        if !is_valid(cols, col_index as i32, col_visited, sum_visited, diff_visited) {
            continue;
        }

        // 若合法则递归枚举下一行的皇后
        cols.push(col_index);
        let col_index = col_index as i32;
        col_visited.insert(col_index as i32);
        sum_visited.insert(row + col_index);
        diff_visited.insert(row - col_index);
        search(results, cols, n, col_visited, sum_visited, diff_visited, answer);
        col_visited.remove(&(col_index as i32));
        sum_visited.remove(&(row + col_index));
        diff_visited.remove(&(row - col_index));
        cols.pop();
    }
}

fn is_valid(
    cols: &Vec<usize>,
    col: i32,
    col_visited: &mut HashSet<i32>,
    sum_visited: &mut HashSet<i32>,
    diff_visited: &mut HashSet<i32>) -> bool {
    let row = cols.len() as i32;

    if col_visited.contains(&col) {
        return false;
    }

    if sum_visited.contains(&(row + col)) {
        return false;
    }

    if diff_visited.contains(&(row - col)) {
        return false;
    }

    true
}