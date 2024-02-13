mod solution_1;

fn main() {
    let arr = vec![1, 12, -5, -6, 50, 3];
    let answer = solution_1::find_max_average(arr, 4);
    println!("{}", answer);
}
