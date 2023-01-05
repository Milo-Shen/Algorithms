// https://www.lintcode.com/problem/140/description

mod solution_1;
mod solution_2;

fn main() {
    let answer = solution_1::fast_power(3, 7, 5);
    println!("answer = {}", answer);

    let answer = solution_2::fast_power(3, 7, 5);
    println!("answer = {}", answer);
}
