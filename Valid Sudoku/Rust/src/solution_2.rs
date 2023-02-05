// https://leetcode.cn/problems/valid-sudoku/submissions/

pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
    // 每一行是否出现当前数字
    let mut rows = [[0; 9]; 9];

    // 每一列上是否出现当前数字
    let mut columns = [[0; 9]; 9];

    // 3x3 九宫格内是否只出现一次当前数字
    let mut sub_boxes = [[[0; 9]; 3]; 3];

    for i in 0..9 {
        for j in 0..9 {
            let ch = board[i][j];

            if ch != '.' {
                let index = (ch as i32 - '0' as i32 - 1) as usize;
                rows[i][index] += 1;
                columns[j][index] += 1;
                sub_boxes[i / 3][j / 3][index] += 1;

                if rows[i][index] > 1 || columns[j][index] > 1 || sub_boxes[i / 3][j / 3][index] > 1 {
                    return false;
                }
            }
        }
    }

    true
}