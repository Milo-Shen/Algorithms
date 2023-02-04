// https://leetcode.cn/problems/valid-sudoku/submissions/

use std::collections::{HashMap};

pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
    // 每一行是否出现当前数字
    let mut row_sets: Vec<HashMap<char, i32>> = vec![HashMap::new(); 9];

    // 每一列上是否出现当前数字
    let mut col_sets: Vec<HashMap<char, i32>> = vec![HashMap::with_capacity(9); 9];

    // 3x3 九宫格内是否只出现一次当前数字
    let mut area_sets: Vec<HashMap<char, i32>> = vec![HashMap::with_capacity(9); 9];

    for i in 0..9 {
        for j in 0..9 {
            // 初始化 row_sets
            if board[i][j] != '.' {
                let count = *row_sets[i].get(&board[i][j]).unwrap_or(&0);
                row_sets[i].insert(board[i][j], count + 1);
            }

            // 初始化 col_sets
            if board[j][i] != '.' {
                let count = *col_sets[i].get(&board[j][i]).unwrap_or(&0);
                col_sets[i].insert(board[j][i], count + 1);
            }

            // 初始化 3x3
            let pos = (i / 3) * 3 + (j / 3);
            if board[i][j] != '.' {
                let count = *area_sets[pos].get(&board[i][j]).unwrap_or(&0);
                area_sets[pos].insert(board[i][j], count + 1);
            }
        }
    }

    for i in 0..9 {
        for j in 0..9 {
            let num = board[i][j];
            // 检查当前行
            if *row_sets[i].get(&num).unwrap_or(&0) > 1 {
                return false;
            }

            // 检查当前列
            if *col_sets[j].get(&num).unwrap_or(&0) > 1 {
                return false;
            }

            // 检查 3x3
            let pos = (i / 3) * 3 + (j / 3);
            if *area_sets[pos].get(&num).unwrap_or(&0) > 1 {
                return false;
            }
        }
    }

    true
}