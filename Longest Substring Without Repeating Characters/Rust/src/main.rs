extern crate core;

mod solution_1;
mod solution_2;

fn main() {
    let s = String::from("s");
    let answer = solution_1::length_of_longest_substring(s);
    println!("answer 1 = {}", answer);
    let s = String::from("au");
    let answer = solution_2::length_of_longest_substring(s);
    println!("answer 2 = {}", answer);
}
