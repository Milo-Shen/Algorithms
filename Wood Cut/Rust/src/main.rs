mod solution_1;

fn main() {
    let arr = vec![6, 6, 5, 5, 6, 5, 4, 4, 5, 6, 6, 6, 5, 4, 5, 6, 5, 6, 4, 4, 4, 4, 6, 4, 5, 5, 4, 6, 6, 6, 6, 4, 6, 4, 4, 5, 6, 5, 5, 4, 6, 4, 6, 4, 4, 6, 4, 5, 6, 5, 6, 6, 5, 4, 4, 5, 6, 4, 5, 5, 5, 6, 6, 4, 4, 5, 5, 6, 5, 5, 6, 4, 6, 4, 5, 6, 4, 4, 4, 6, 4, 6, 4, 5, 4, 6, 5, 6, 6, 5, 4, 4, 6, 5, 6, 5, 6, 4, 4, 6, 4, 6, 5, 4, 4, 4, 4, 6, 6, 4, 6, 6, 6, 5, 4, 4, 6, 4, 4, 4, 5, 4, 6, 4, 6, 6, 4, 5, 6, 5, 6, 5, 4, 5, 5, 5, 4, 6, 5, 4, 5, 6, 4, 4, 6, 6, 5, 6, 6, 4, 6, 5, 6, 5, 4, 6, 4, 6, 4, 6, 5, 6, 4, 6, 6, 4, 5, 4, 6, 6, 5, 6, 6, 5, 4, 4, 4, 4, 4, 5, 5, 4, 6, 5, 4, 6, 4, 6, 5, 6, 6, 5, 4, 5, 6, 4, 4, 6, 5, 5, 6, 6, 6, 4, 6, 6, 5, 6, 5, 4, 6, 5, 4, 6, 5, 6, 4, 5, 4, 4, 5, 4, 5, 6, 6, 4, 4, 4, 4, 6, 6, 6, 6, 6, 5, 5, 4, 4, 5, 5, 6, 6, 5, 6, 6, 6, 4, 5, 5, 4, 6, 4, 6, 4, 4, 6, 5, 6, 6, 6, 5, 4, 4, 4, 6, 4, 6, 4, 5, 6, 6, 4, 5, 6, 6, 6, 6, 6, 4, 5, 6, 4, 4, 4, 4, 5, 5, 5, 6, 5, 5, 5, 4, 4, 5, 6, 6, 4, 6, 6, 6, 4, 5, 4, 6, 5, 6, 5, 5, 6, 5, 4, 5, 4, 6, 4, 5, 5, 5, 5, 5, 5, 4, 5, 5, 6, 4, 5, 6, 5, 6, 5, 6, 4, 4, 5, 6, 5, 6, 6, 6, 5, 4, 5, 4, 6, 6, 6, 6, 4, 5, 5, 4, 5, 5, 5, 4, 6, 5, 5, 4, 6, 5, 6, 6, 6, 4, 4, 4, 6, 4, 6, 6, 4, 5, 4, 5, 6, 6, 6, 5, 6, 4, 6, 6, 5, 6, 5, 6, 4, 4, 6, 4, 6, 5, 6, 6, 5, 4, 6, 5, 6, 6, 5, 6, 6, 4, 6, 6, 5, 6, 5, 6, 4, 5, 5, 5, 6, 6, 4, 5, 4, 4, 6, 4, 6, 6, 5, 6, 6, 6, 5, 6, 6, 4, 6, 6, 5, 5, 6, 5, 6, 6, 6, 5, 5, 6, 6, 5, 4, 6, 5, 6, 5, 6, 5, 5, 6, 5, 4, 5, 6, 5, 4, 6, 5, 5, 4, 5, 4, 5, 6, 5, 6, 4, 6, 5, 4, 4, 4, 5, 5, 4, 5, 4, 6, 4, 5, 5, 6, 5, 6, 6, 5, 4, 6, 6, 5, 5, 6, 5, 5, 5, 5, 6, 5, 5, 4, 4, 6, 4, 5, 4, 6, 6, 5, 6, 5, 6, 6, 4, 5, 5, 5, 5, 6, 6, 4, 4, 5, 6, 5, 5, 6, 4, 6, 6, 5, 5, 6, 4, 4, 4, 4, 5, 4, 5, 4, 5, 5, 4, 5, 5, 5, 4, 6, 4, 4, 4, 5, 4, 4, 5, 4, 6, 6, 5, 6, 4, 4, 6, 6, 4, 4, 5, 6, 5, 5, 4, 6, 6, 4, 6, 5, 4, 5, 5, 6, 6, 6, 4, 6, 6, 5, 6, 4, 5, 6, 4, 6, 4, 5, 5, 4, 4, 6, 6, 6, 4, 6, 5, 5, 4, 5, 5, 4, 5, 6, 6, 6, 4, 5, 4, 5, 6, 4, 6, 4, 5, 4, 5, 4, 6, 6, 6, 5, 4, 6, 4, 6, 4, 5, 6, 5, 6, 6, 6, 5, 4, 5, 6, 6, 6, 6, 4, 5, 6, 5, 4, 4, 5, 5, 4, 4, 4, 5, 4, 6, 6, 6, 6, 4, 5, 5, 4, 5, 4, 5, 4, 4, 6, 4, 5, 5, 6, 4, 6, 5, 4, 6, 4, 6, 5, 5, 6, 5, 4, 4, 5, 4, 4, 5, 5, 5, 5, 4, 4, 5, 6, 4, 4, 6, 6, 5, 4, 6, 5, 5, 4, 4, 6, 4, 6, 4, 5, 6, 4, 5, 4, 6, 5, 4, 4, 5, 6, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 4, 6, 5, 6, 6, 6, 6, 4, 4, 5, 6, 5, 4, 5, 4, 4, 5, 6, 5, 5, 4, 4, 4, 6, 6, 6, 6, 6, 4, 5, 4, 4, 4, 4, 5, 6, 4, 4, 5, 5, 6, 6, 6, 6, 4, 6, 6, 5, 4, 6, 4, 5, 4, 5, 5, 4, 6, 6, 4, 6, 4, 5, 4, 5, 5, 4, 6, 5, 5, 4, 4, 6, 6, 5, 5, 4, 6, 5, 5, 6, 6, 4, 6, 6, 4, 6, 6, 4, 5, 6, 6, 5, 4, 5, 4, 5, 5, 5, 4, 6, 5, 4, 6, 5, 4, 4, 5, 6, 5, 5, 6, 4, 4, 6, 4, 4, 5, 4, 5, 5, 4, 5, 5, 4, 4, 6, 4, 5, 6, 4, 4, 5, 6, 6, 4, 5, 4, 6, 5, 5, 5, 5, 6, 4, 5, 6, 6, 6, 4, 6, 5, 4, 6, 5, 4, 5, 4, 5, 4, 6, 4, 6, 6, 4, 5, 6, 4, 4, 6, 5, 4, 4, 5, 6, 6, 4, 6, 6, 4, 6, 5, 6, 6, 4, 4, 5, 5, 6, 5, 4, 4, 5, 4, 5, 4, 4, 6, 4, 4, 4, 4, 4, 4, 6, 6, 6, 5, 6, 5, 5, 4, 5, 5, 5, 5, 5, 6, 5, 6, 4, 6, 5, 4, 5, 4, 5, 4, 6, 5, 5, 4, 5, 6, 5, 4, 5, 5, 6, 4, 6, 5, 6, 4, 6, 6, 5, 6, 4, 4, 4, 5, 4, 6, 4, 4, 4, 5, 4, 5, 4, 6, 4, 4, 5, 4, 5, 6, 4, 6, 6, 5, 4, 5, 4, 5, 6, 4, 5, 6, 4, 5, 4, 5, 5, 4, 4, 5, 4, 5, 6, 5, 4, 5, 5, 6, 4, 5, 5, 4, 6, 6, 6, 5, 5, 5, 6, 6, 4, 6, 5, 4, 6, 6, 6, 5, 6, 6, 4, 4, 5, 6, 4, 4, 5, 6, 5, 5, 5, 6, 6, 5, 4, 6, 6, 5, 4, 5, 6, 4, 4, 6, 4, 6, 4, 4, 5, 4, 5, 4, 5, 4, 6, 4, 5, 5, 6, 5, 5, 4, 6, 6, 4, 6, 5, 5, 5, 6, 5, 4, 5, 6, 6, 4, 6, 6, 4, 5, 6, 4, 6, 4, 5, 4, 4, 6, 5, 5, 4, 6, 5, 4, 6, 6, 4, 4, 5, 6, 4, 4, 4, 4, 4, 6, 6, 6, 4, 5, 5, 4, 4, 5, 4, 4, 5, 6, 5, 4, 6, 6, 6, 5, 6, 5, 4, 5, 4, 6, 6, 5, 6, 5, 4, 4, 5, 4, 4, 4, 6, 4, 5, 5, 4, 4, 5, 4, 5, 5, 5, 5, 5, 6, 4, 5, 4, 4, 4, 4, 4, 4, 5, 4, 6, 5, 5, 4, 4, 5, 5, 4, 4, 5, 5, 6, 4, 6, 4, 5, 5, 6, 5, 5, 6, 4, 4, 5, 5, 6, 5, 4, 4, 4, 4, 4, 6, 5, 4, 5, 6, 4, 4, 6, 4, 4, 4, 6, 4, 4, 6, 5, 6, 6, 6, 5, 6, 5, 4, 5, 4, 5, 5, 6, 5, 6, 4, 6, 5, 6, 4, 4, 6, 6, 4, 4, 5, 5, 5, 5, 5, 4, 6, 4, 5, 4, 4, 4, 4, 5, 6, 4, 4, 5, 4, 5, 5, 6, 6, 5, 6, 6, 5, 6, 6, 5, 5, 4, 5, 4, 5, 5, 5, 4, 4, 6, 5, 4, 6, 6, 6, 4, 4, 6, 5, 6, 5, 6, 6, 4, 5, 6, 6, 6, 4, 4, 4, 5, 4, 4, 6, 5, 5, 6, 4, 6, 4, 6, 4, 4, 4, 5, 6, 6, 6, 6, 5, 6, 5, 5, 4, 4, 6, 4, 6, 4, 4, 6, 6, 5, 4, 4, 6, 5, 4, 5, 4, 4, 6, 6, 6, 5, 5, 5, 6, 6, 6, 4, 4, 6, 5, 6, 4, 6, 5, 6, 5, 5, 5, 5, 6, 5, 6, 6, 4, 6, 6, 6, 6, 4, 5, 6, 5, 6, 4, 6, 6, 5, 5, 4, 4, 6, 4, 4, 5, 4, 4, 5, 6, 6, 4, 4, 6, 6, 6, 4, 5, 4, 5, 6, 6, 5, 6, 4, 5, 5, 5, 4, 4, 4, 5, 4, 5, 5, 5, 5, 4, 4, 5, 5, 6, 4, 6, 5, 5, 4, 4, 6, 6, 5, 6, 4, 4, 6, 4, 6, 4, 6, 4, 4, 4, 6, 5, 6, 4, 6, 5, 4, 4, 6, 4, 6, 6, 4, 5, 6, 6, 4, 4, 4, 4, 6, 5, 4, 4, 5, 5, 6, 6, 5, 4, 4, 4, 6, 6, 5, 5, 5, 6, 4, 5, 4, 5, 5, 4, 4, 6, 5, 4, 5, 4, 6, 5, 6, 5, 4, 4, 6, 4, 5, 6, 5, 4, 5, 4, 5, 4, 4, 5, 6, 5, 6, 5, 4, 5, 4, 4, 5, 6, 4, 6, 4, 6, 4, 5, 4, 4, 6, 5, 5, 5, 4, 5, 6, 4, 5, 4, 4, 6, 5, 5, 6, 5, 6, 6, 4, 4, 6, 6, 6, 6, 4, 6, 4, 4, 5, 4, 4, 4, 6, 6, 5, 4, 6, 4, 6, 6, 6, 5, 4, 5, 6, 5, 5, 5, 5, 5, 4, 4, 6, 4, 5, 5, 5, 5, 5, 5, 5, 4, 6, 4, 6, 6, 4, 5, 4, 4, 6, 5, 6, 5, 4, 4, 6, 5, 6, 5, 6, 5, 5, 6, 6, 6, 5, 4, 4, 4, 5, 4, 6, 6, 5, 5, 4, 6, 5, 6, 6, 5, 4, 4, 5, 4, 6, 5, 4, 6, 6, 5, 5, 5, 5, 6, 6, 6, 6, 6, 4, 6, 6, 5, 6, 6, 4, 4, 4, 4, 5, 4, 5, 4, 4, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 5, 4, 6, 4, 4, 5, 5, 5, 6, 6, 5, 6, 5, 4, 4, 4, 6, 6, 5, 6, 4, 5, 5, 6, 6, 4, 5, 5, 4, 5, 5, 4, 5, 6, 5, 6, 5, 6, 6, 5, 5, 4, 5, 4, 5, 6, 5, 5, 5, 4, 4, 6, 5, 5, 4, 4, 6, 6, 6, 6, 5, 6, 6, 4, 5, 5, 4, 5, 4, 4, 4, 4, 5, 6, 6, 5, 4, 4, 4, 5, 6, 5, 5, 4, 4, 6, 5, 4, 6, 4, 4, 4, 4, 5, 6, 4, 5, 5, 4, 5, 4, 5, 6, 5, 5, 4, 5, 6, 4, 5, 4, 4, 4, 6, 5, 4, 5, 6, 4, 5, 4, 4, 4, 5, 5, 5, 6, 6, 4, 4, 6, 6, 4, 4, 5, 5, 6, 4, 6, 6, 6, 6, 4, 5, 6, 4, 6, 6, 6, 5, 6, 5, 6, 5, 5, 5, 5, 5, 5, 5, 4, 6, 5, 4, 4, 6, 6, 6, 6, 6, 4, 5, 4, 6, 4, 5, 5, 6, 6, 5, 5, 6, 6, 5, 6, 5, 6, 4, 5, 4, 5, 4, 5, 6, 5, 4, 5, 5, 6, 4, 4, 6, 6, 6, 6, 5, 5, 6, 4, 6, 4, 6, 6, 6, 6, 4, 6, 5, 4, 6, 4, 4, 5, 6, 6, 6, 6, 4, 5, 6, 4, 6, 4, 4, 4, 6, 6, 4, 5, 6, 4, 6, 6, 5, 6, 6, 6, 5, 5, 4, 4, 5, 5, 5, 6, 5, 6, 6, 6, 6, 6, 5, 5, 5, 6, 4, 5, 6, 5, 4, 4, 5, 4, 5, 5, 4, 4, 6, 4, 4, 6, 4, 5];
    let answer = solution_1::wood_cut(arr, 90000);
    println!("answer = {}", answer);
}
