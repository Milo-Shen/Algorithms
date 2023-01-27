// https://leetcode.cn/problems/merge-nodes-in-between-zeros/

use rust::{build_list, print_list};

mod solution_1;

fn main() {
    let root = build_list(vec![0, 1, 0, 3, 0, 2, 2, 0]);
    let answer = solution_1::merge_nodes(root);
    print_list(answer);
}
