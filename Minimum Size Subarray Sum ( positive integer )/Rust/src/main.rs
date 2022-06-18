mod solution_1;

fn main() {
    let target = 7;
    let nums = vec![2, 3, 1, 2, 4, 3];
    let answer_1 = solution_1::min_sub_array_len(target, nums);
    println!("answer_1 = {}", answer_1);
}