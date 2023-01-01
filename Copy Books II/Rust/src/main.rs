// https://www.lintcode.com/problem/438/description

mod solution_1;

fn main() {
    let pages = vec![3, 2, 4];
    let k = 4;
    let answer = solution_1::copy_books_i_i(k, pages);
    println!("answer = {}", answer);
}
