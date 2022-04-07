mod solution_1;

fn main() {
    let arr = vec![3, 2, 2, 1];
    let answer = solution_1::partition_array(arr, 2);
    println!("answer = {}", answer);
}
