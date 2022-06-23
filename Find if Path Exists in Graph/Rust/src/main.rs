mod solution_1;

fn main() {
    let n = 3;
    let edges = vec![vec![0, 1], vec![1, 2], vec![2, 0]];
    let start = 0;
    let end = 2;
    let answer = solution_1::valid_path(n, edges, start, end);
    println!("answer = {}", answer);
}
