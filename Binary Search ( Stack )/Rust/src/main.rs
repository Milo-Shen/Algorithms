mod solution_1;

fn main() {
    let arr = vec![1, 2, 2, 4, 5, 5];
    let answer = solution_1::binary_search(arr, 2);
    println!("answer = {:?}", answer);
}
