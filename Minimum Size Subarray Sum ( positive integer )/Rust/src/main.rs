mod solution_1;
mod solution_2;
mod solution_3;

fn main() {
    let target = 7;
    let nums = vec![2, 3, 1, 2, 4, 3];
    let answer_1 = solution_1::min_sub_array_len(target, nums);
    println!("answer_1 = {}", answer_1);
    let nums = vec![2, 3, 1, 2, 4, 3];
    let answer_2 = solution_2::min_sub_array_len(target, nums);
    println!("answer_2 = {}", answer_2);
    let nums = vec![2, 3, 1, 2, 4, 3];
    let answer_3 = solution_3::min_sub_array_len(target, nums);
    println!("answer_3 = {}", answer_3);
}