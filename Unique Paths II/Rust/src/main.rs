// https://leetcode.cn/problems/unique-paths-ii/

mod solution_1;

fn main() {
    let grid = vec![
        vec![0, 0],
        vec![1, 1],
        vec![0, 0],
    ];

    let answer = solution_1::unique_paths_with_obstacles(grid);
    println!("answer = {}", answer);
}
