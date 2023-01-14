// https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/

mod solution_1;
mod solution_2;

fn main() {
    let nums = vec![8, 1, 2, 2, 3];
    let answer = solution_1::smaller_numbers_than_current(nums);
    println!("answer = {:?}", answer);

    let nums = vec![8, 1, 2, 2, 3];
    let answer = solution_2::smaller_numbers_than_current(nums);
    println!("answer = {:?}", answer);
}
