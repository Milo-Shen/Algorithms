// https://leetcode.cn/problems/smallest-rectangle-enclosing-black-pixels/
// https://www.lintcode.com/problem/600/

mod solution_1;

fn main() {
    let image = vec![
        vec!['0', '0', '1', '0'],
        vec!['0', '1', '1', '0'],
        vec!['0', '1', '0', '0'],
    ];
    let x = 0;
    let y = 2;
    let answer = solution_1::min_area(image, x, y);
    println!("answer = {}", answer);
}
