mod solution;

fn main() {
    let org = vec![1, 2, 3];
    let seqs = vec![vec![1, 2], vec![1, 3], vec![2, 3]];
    let answer = solution::sequence_reconstruction(org, seqs);
    println!("answer = {}", answer);
}
