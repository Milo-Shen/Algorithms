// https://leetcode.cn/problems/unique-paths-ii/

mod solution_1;
mod solution_2;

fn main() {
    let grid = vec![
        vec![0, 0],
        vec![1, 1],
        vec![0, 0],
    ];

    let answer = solution_1::unique_paths_with_obstacles(grid.clone());
    println!("answer = {}", answer);

    let answer = solution_2::unique_paths_with_obstacles(grid);
    println!("answer = {}", answer);
}
