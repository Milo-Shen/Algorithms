mod solution_1;

fn main() {
    let arr = vec![0, 2, 1, 0];
    let answer = solution_1::peak_index_in_mountain_array(arr);
    println!("answer = {}", answer);
}
