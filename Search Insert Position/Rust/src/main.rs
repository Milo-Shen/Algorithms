mod solution;

fn main() {
    let nums = vec![1, 3, 5, 6];
    let answer = solution::search_insert(nums, 2);
    println!("the answer = {}", answer);
}
