// https://www.lintcode.com/problem/604/

mod solution_1;

fn main() {
    let nums = vec![1, 2, 7, 8, 5];
    let answer = solution_1::win_sum(nums, 3);
    println!("answer = {:?}", answer);
}