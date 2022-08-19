mod solution;

fn main() {
    let nums = vec![1, 2, 2, 1, 3, 4, 4, 5, 6];
    let answer = solution::first_unique_number(nums, 5);
    println!("answer = {}", answer);
}
