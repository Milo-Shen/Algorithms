// https://leetcode.cn/problems/roman-to-integer/

mod solution_1;
mod solution_2;

fn main() {
    let answer = solution_1::roman_to_int(String::from("III"));
    println!("answer = {}", answer);
}
