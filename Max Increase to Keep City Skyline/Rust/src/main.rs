// https://leetcode.cn/problems/max-increase-to-keep-city-skyline/

mod solution_1;

fn main() {
    let grid = vec![
        vec![3, 0, 8, 4],
        vec![2, 4, 5, 7],
        vec![9, 2, 6, 3],
        vec![0, 3, 1, 0],
    ];

    let answer = solution_1::max_increase_keeping_skyline(grid);
    println!("answer = {}", answer);
}
