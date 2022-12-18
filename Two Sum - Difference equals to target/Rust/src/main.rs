// https://www.lintcode.com/problem/610/

mod solution_1;
mod solution_2;
mod solution_3;
mod solution_4;
mod solution_5;

fn main() {
    let nums = vec![0, 5, 7];
    let target = -2;
    let answer = solution_1::two_sum7(nums, target);
    println!("answer = {:?}", answer);

    let nums = vec![0, 5, 7];
    let target = -2;
    let answer = solution_2::two_sum7(nums, target);
    println!("answer = {:?}", answer);

    let nums = vec![0, 5, 7];
    let target = -2;
    let answer = solution_3::two_sum7(nums, target);
    println!("answer = {:?}", answer);

    let nums = vec![0, 5, 7];
    let target = -2;
    let answer = solution_4::two_sum7(nums, target);
    println!("answer = {:?}", answer);

    let nums = vec![0, 5, 7];
    let target = -2;
    let answer = solution_5::two_sum7(nums, target);
    println!("answer = {:?}", answer);
}
