// https://leetcode.cn/problems/search-a-2d-matrix/
// https://leetcode.cn/problems/search-a-2d-matrix-ii/
// https://www.lintcode.com/problem/28/

mod solution_1;

fn main() {
    let matrix = vec![
        vec![1, 3, 5, 7],
        vec![10, 11, 16, 20],
        vec![23, 30, 34, 60],
    ];
    let target = 3;
    let answer = solution_1::search_matrix(matrix, target);
    println!("answer = {}", answer);
}
