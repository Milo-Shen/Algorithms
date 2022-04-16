mod solution;

fn main() {
    let arr = vec![1, 2, 3, 2];
    let answer = solution::sum_of_unique(arr);
    println!("{}", answer);
}
