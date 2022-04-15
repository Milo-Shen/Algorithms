mod solution_1;
mod solution_2;

fn main() {
    let nums = vec![1];
    let answer_1 = solution_1::search(nums, 0);
    println!("answer_1 = {:?}", answer_1);
    let nums = vec![1001, 10001, 10007, 1, 10, 101, 201];
    let answer_2 = solution_2::search(nums, 10001);
    println!("answer_2 = {:?}", answer_2);
}
