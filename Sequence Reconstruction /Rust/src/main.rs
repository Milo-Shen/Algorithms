mod solution;

fn main() {
    let org = vec![4, 1, 5, 2, 6, 3];
    let seqs = vec![vec![5, 2, 6, 3], vec![4, 1, 5, 2]];
    let answer = solution::sequence_reconstruction(org, seqs);
    println!("answer = {}", answer);
}
