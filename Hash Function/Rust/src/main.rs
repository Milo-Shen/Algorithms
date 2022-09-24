// https://www.lintcode.com/problem/128/

mod solution_1;

fn main() {
    let answer = solution_1::hash_code(String::from("Wrong answer or accepted?"), 1000000007);
    println!("answer = {}", answer);
}
