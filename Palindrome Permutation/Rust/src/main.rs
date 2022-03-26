mod solution_1;

fn main() {
    let test_str = String::from("race a car");
    let is_palindrome = solution_1::solution(test_str.clone());
    println!("{} palindrome = {}", test_str, is_palindrome);
}
