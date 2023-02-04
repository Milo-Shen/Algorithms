// https://leetcode.cn/problems/n-queens/
// https://www.lintcode.com/problem/33/

mod solution_1;
mod solution_2;

fn main() {
    let answer = solution_1::solve_n_queens(4);
    println!("answer = {:?}", answer);

    let answer = solution_2::solve_n_queens(4);
    println!("answer = {:?}", answer);
}
