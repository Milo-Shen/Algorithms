// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

mod solution_1;
mod solution_2;
mod solution_3;

fn main() {
    let triangle = vec![vec![2], vec![3, 4], vec![6, 5, 7], vec![4, 1, 8, 3]];
    let answer = solution_1::minimum_total(triangle);
    println!("answer = {}", answer);

    let triangle = vec![vec![2], vec![3, 4], vec![6, 5, 7], vec![4, 1, 8, 3]];
    let answer = solution_2::minimum_total(triangle);
    println!("answer = {}", answer);

    let triangle = vec![vec![2], vec![3, 4], vec![6, 5, 7], vec![4, 1, 8, 3]];
    let answer = solution_3::minimum_total(triangle);
    println!("answer = {}", answer);
}
