// https://leetcode.cn/problems/search-a-2d-matrix/
// https://leetcode.cn/problems/search-a-2d-matrix-ii/
// https://www.lintcode.com/problem/28/

pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
    for i in 0..matrix.len() {
        for j in 0..matrix[i].len() {
            if matrix[i][j] == target {
                return true;
            }
        }
    }

    false
}