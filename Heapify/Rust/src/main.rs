// https://www.lintcode.com/problem/130/

mod solution_1;
mod solution_2;

fn main() {
    let mut arr = vec![3, 2, 1, 4, 5];
    let answer = solution_1::heapify(arr);
    println!("{:?}", answer);

    let mut arr = vec![3, 2, 1, 4, 5];
    let answer = solution_2::heapify(arr);
    println!("{:?}", answer);
}
