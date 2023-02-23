// https://www.lintcode.com/problem/630
// lint code 上这题输入的 grid 是 boolean 数组, source 和 destination 是 Point 实例, 这个需要注意
// 另外一个则是 grid 是 boolean 数组，而非 false, 1 数组，和题目介绍不一样


mod solution_1;

fn main() {
    let grid = vec![
        vec![false, false, false, false],
        vec![false, false, false, false],
        vec![false, false, false, false],
    ];
    let answer = solution_1::shortest_path2(grid);
    println!("answer = {}", answer);
}
