// https://leetcode.cn/problems/valid-sudoku/submissions/

use std::collections::{HashMap};

pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
    // 每一行是否出现当前数字
    let mut row_sets = vec![HashMap::with_capacity(9); 9];

    true
}