mod solution_1;

fn main() {
    let answer = solution_1::is_valid(String::from("(){}}{"));
    println!("answer = {}", answer);
}
