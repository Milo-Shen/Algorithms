// https://leetcode.cn/problems/search-a-2d-matrix-ii/

mod solution_1;

fn main() {
    let matrix = vec![
        vec![1, 4, 7, 11, 15],
        vec![2, 5, 8, 12, 19],
        vec![3, 6, 9, 16, 22],
        vec![10, 13, 14, 17, 24],
        vec![18, 21, 23, 26, 30],
    ];
    let target = 5;
    let answer = solution_1::search_matrix(matrix, target);
    println!("answer = {}", answer);
}
