// https://leetcode.cn/problems/ugly-number-ii/

mod solution_1;
mod solution_2;

fn main() {
    let answer = solution_1::nth_ugly_number(10);
    println!("answer = {}", answer);

    let answer = solution_2::nth_ugly_number(10);
    println!("answer = {}", answer);
}
