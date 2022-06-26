mod solution;

fn main() {
    // test data
    let n = 4;
    let edges = vec![vec![2, 3], vec![1, 2], vec![1, 3]];
    let answer = solution::count_components(n, edges);
    println!("answer = {}", answer);
}
