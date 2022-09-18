// https://www.lintcode.com/problem/132
// https://leetcode.cn/problems/word-search/

mod solution_1;

fn main() {
    let board = vec![
        vec!['A', 'B', 'C', 'E'],
        vec!['S', 'F', 'C', 'S'],
        vec!['A', 'D', 'E', 'E'],
    ];

    let word = String::from("ABCCED");
    let answer = solution_1::exist(board, word);
    println!("answer = {}", answer);
}