mod solution_1;

use solution_1::Reader;

fn main() {
    let arr = vec![-1, 0, 3, 5, 9, 12];
    let reader = Reader::new(arr);
    let answer = solution_1::search(&reader, 9);
    println!("answer = {}", answer);
}
