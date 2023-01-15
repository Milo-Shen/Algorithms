// https://www.lintcode.com/problem/249/description

mod solution_1;

fn main() {
    let nums = vec![32, 67];
    let answer = solution_1::count_of_smaller_number_i_i(nums);
    println!("answer = {:?}", answer);
}
