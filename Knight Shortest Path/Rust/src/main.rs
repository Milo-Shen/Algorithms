// https://www.lintcode.com/problem/611/

mod solution_1;

use solution_1::Point;

fn main() {
    let grid = vec![
        vec![false, true, false],
        vec![false, false, false],
        vec![false, false, false],
    ];

    let source = Point::new(2, 0);
    let destination = Point::new(2, 2);
    let answer = solution_1::shortest_path(grid, source, destination);
    println!("answer = {}", answer);
}
