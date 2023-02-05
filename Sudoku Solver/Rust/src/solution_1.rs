// https://leetcode.cn/problems/sudoku-solver/
// https://www.lintcode.com/problem/802/

pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
    dfs(board, 0);
}

fn dfs(board: &mut Vec<Vec<char>>, index: i32) -> bool {
    if index == 81 {
        return true;
    }

    let x = (index / 9) as usize;
    let y = (index % 9) as usize;
    if board[x][y] != '.' {
        return dfs(board, index + 1);
    }

    for val in '1'..='9' {
        if !is_valid(board, x, y, val) {
            continue;
        }

        board[x][y] = val;

        if dfs(board, index + 1) {
            return true;
        }

        board[x][y] = '.';
    }

    false
}

fn is_valid(board: &mut Vec<Vec<char>>, x: usize, y: usize, val: char) -> bool {
    for i in 0..9 {
        if board[x][i] == val {
            return false;
        }

        if board[i][y] == val {
            return false;
        }

        if board[x / 3 * 3 + i / 3][y / 3 * 3 + i % 3] == val {
            return false;
        }
    }

    true
}