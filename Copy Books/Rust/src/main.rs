// https://www.lintcode.com/problem/437/

mod solution_1;

fn main() {
    let pages = vec![3, 2, 4];
    let k = 2;
    let answer = solution_1::copy_books(pages, k);
    println!("answer = {}", answer);
}
