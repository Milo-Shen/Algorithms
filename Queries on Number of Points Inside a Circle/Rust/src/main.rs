// https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle/

mod solution_1;

fn main() {
    let points = vec![
        vec![1, 3],
        vec![3, 3],
        vec![5, 3],
        vec![2, 2],
    ];
    let queries = vec![
        vec![2, 3, 1],
        vec![4, 3, 1],
        vec![1, 1, 2],
    ];
    let answer = solution_1::count_points(points, queries);
    println!("answer = {:?}", answer);
}
