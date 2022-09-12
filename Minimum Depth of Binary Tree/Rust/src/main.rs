// https://leetcode.cn/problems/minimum-depth-of-binary-tree/submissions/

use binary_tree::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::min_depth(root_node);
    println!("answer = {:?}", answer);
}
