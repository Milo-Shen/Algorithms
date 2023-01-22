// https://leetcode.cn/problems/w6cpku/

use rust::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(7), Some(3), Some(15), None, None, Some(9), Some(20)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::convert_bst(root_node);
    println!("answer = {:?}", answer);
}
