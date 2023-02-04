// https://leetcode.cn/problems/n-queens/
// https://www.lintcode.com/problem/33/

pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
    // 异常检测
    if n <= 0 {
        return Vec::new();
    }

    let mut result = Vec::new();

    search(&mut result, &mut Vec::new(), n as usize);
    
    result
}

fn search(results: &mut Vec<Vec<String>>, cols: &mut Vec<usize>, n: usize) {
    // 若已经放置了 n 个皇后, 表示出现了一种解法, 绘制后加入答案 result
    if cols.len() == n {
        results.push(draw(cols));
        return;
    }

    // 若已经放置了 n 个皇后表示出现了一种解法, 绘制后加入答案 result
    for col_index in 0..n {
        if !is_valid(cols, col_index as i32) {
            continue;
        }

        // 若合法则递归枚举下一行的皇后
        cols.push(col_index);
        search(results, cols, n);
        cols.pop();
    }
}

fn is_valid(cols: &Vec<usize>, col: i32) -> bool {
    let row = cols.len() as i32;
    for row_index in 0..cols.len() {
        // 如果有其他皇后在同一列或同一对角线上则不合法
        if cols[row_index] as i32 == col {
            return false;
        }

        if row + col == row_index as i32 + cols[row_index] as i32 {
            return false;
        }

        if row - col == row_index as i32 - cols[row_index] as i32 {
            return false;
        }
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