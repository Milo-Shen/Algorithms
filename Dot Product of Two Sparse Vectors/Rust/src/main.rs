// https://leetcode.cn/problems/dot-product-of-two-sparse-vectors/submissions/

mod solution_1;

fn main() {
    let v1 = solution_1::SparseVector::new(vec![1, 0, 0, 2, 3]);
    let v2 = solution_1::SparseVector::new(vec![0, 3, 0, 4, 0]);
    let answer = v1.dot_product(v2);
    println!("answer = {}", answer);
}
