mod solution_1;

fn main() {
    let arr = vec![-1, 0, 1, 2, -1, -4];
    let answer = solution_1::three_sum(arr);
    println!("answer = {:?}", answer);
}
