// https://leetcode.cn/problems/search-a-2d-matrix/
// https://leetcode.cn/problems/search-a-2d-matrix-ii/
// https://www.lintcode.com/problem/28/

pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
    let rows = matrix.len();
    if rows == 0 {
        return false;
    }

    let cols = matrix[0].len();
    if cols == 0 {
        return false;
    }

    let mut start = 0;
    let mut end = rows * cols - 1;

    while start + 1 < end {
        let mid = start + ((end - start) / 2);

        if get_number(&matrix, cols, mid) < target {
            start = mid;
        } else {
            end = mid;
        }
    }

    if get_number(&matrix, cols, start) == target {
        return true;
    }

    if get_number(&matrix, cols, end) == target {
        return true;
    }

    false
}

fn get_number(matrix: &Vec<Vec<i32>>, cols: usize, index: usize) -> i32 {
    let x = index / cols;
    let y = index % cols;
    return matrix[x][y];
}