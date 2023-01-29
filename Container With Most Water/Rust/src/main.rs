// https://leetcode.cn/problems/container-with-most-water/

mod solution_1;
mod solution_2;

fn main() {
    let answer = solution_1::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]);
    println!("answer = {}", answer);

    let answer = solution_2::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]);
    println!("answer = {}", answer);
}
