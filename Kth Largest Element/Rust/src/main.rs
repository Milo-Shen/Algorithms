mod solution_1;
mod solution_2;

fn main() {
    let vec = vec![9, 3, 2, 4, 8];
    let answer_nums = solution_1::solution(vec, 3);
    println!("answer_nums = {}", answer_nums);
    let vec = vec![String::from("9"), String::from("3"), String::from("2"), String::from("4"), String::from("8")];
    let answer_string = solution_2::solution(vec, 3);
    println!("answer_string = {}", answer_string);
}
