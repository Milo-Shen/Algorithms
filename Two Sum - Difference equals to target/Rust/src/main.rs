// https://www.lintcode.com/problem/610/

mod solution_1;
mod solution_2;

fn main() {
    let nums = vec![0, 5, 7];
    let target = -2;
    let answer = solution_1::two_sum7(nums, target);
    println!("answer = {:?}", answer);

    let nums = vec![0, 5, 7];
    let target = -2;
    let answer = solution_2::two_sum7(nums, target);
    println!("answer = {:?}", answer);
}
