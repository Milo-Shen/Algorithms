mod solution_1;
mod solution_2;

fn main() {
    let target = 7;
    let nums = vec![2, 3, 1, 2, 4, 3];
    let answer_1 = solution_1::min_sub_array_len(target, nums);
    let nums = vec![2, 3, 1, 2, 4, 3];
    let answer_2 = solution_2::min_sub_array_len(target, nums);
    println!("answer_1 = {}", answer_1);
    println!("answer_2 = {}", answer_2);
}