// https://leetcode.cn/problems/n-queens/
// https://www.lintcode.com/problem/33/

use std::collections::HashSet;

pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
    // 异常检测
    if n <= 0 {
        return Vec::new();
    }

    let mut result = Vec::new();
    let mut col_visited = HashSet::new();
    let mut sum_visited = HashSet::new();
    let mut diff_visited = HashSet::new();

    search(&mut result, &mut Vec::new(), n as usize, &mut col_visited, &mut sum_visited, &mut diff_visited);

    result
}

fn search(
    results: &mut Vec<Vec<String>>,
    cols: &mut Vec<usize>,
    n: usize,
    col_visited: &mut HashSet<i32>,
    sum_visited: &mut HashSet<i32>,
    diff_visited: &mut HashSet<i32>) {
    // 若已经放置了 n 个皇后, 表示出现了一种解法, 绘制后加入答案 result
    if cols.len() == n {
        results.push(draw(cols));
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
        search(results, cols, n, col_visited, sum_visited, diff_visited);
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

fn draw(cols: &Vec<usize>) -> Vec<String> {
    let mut result = Vec::new();
    let cols_len = cols.len();

    for i in 0..cols_len {
        let mut str = String::new();
        for j in 0..cols_len {
            str += if j == cols[i] { "Q" } else { "." };
        }
        result.push(str);
    }

    result
}