mod solution_1;

fn main() {
    let arr = vec![1, 0, -1, 0, -2, 2];
    let answer = solution_1::four_sum(arr, 0);
    println!("answer = {:?}", answer);
}
