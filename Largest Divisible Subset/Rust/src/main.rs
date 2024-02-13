mod solution_1;

fn main() {
    let data = vec![1, 2, 3];
    let answer = solution_1::largest_divisible_subset(data);
    println!("{:?}", answer);
}
