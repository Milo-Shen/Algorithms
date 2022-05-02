// https://leetcode.cn/problems/sequence-reconstruction/
// https://www.lintcode.com/problem/605

use std::collections::{HashMap, HashSet};

pub fn sequence_reconstruction(nums: Vec<i32>, sequences: Vec<Vec<i32>>) -> bool {
    // 构建图
    let graph = build_graph(&sequences);

    // 计算遍历的路径
    let top_order = get_top_order(&graph);

    false
}

fn build_graph(sequences: &Vec<Vec<i32>>) -> HashMap<i32, HashSet<i32>> {
    // 生成图
    let mut graph: HashMap<i32, HashSet<i32>> = HashMap::new();

    // 生成图的各个 node
    for i in 0..sequences.len() {
        let sequence = &sequences[i];
        for j in 0..sequence.len() {
            let node = sequence[j];
            if !graph.contains_key(&node) {
                graph.insert(node, HashSet::new());
            }
        }
    }

    // 为图的每个节点生成 neighbors
    for i in 0..sequences.len() {
        let sequence = &sequences[i];
        for j in 1..sequence.len() {
            graph.get_mut(&sequence[j - 1]).unwrap().insert(sequence[j]);
        }
    }

    graph
}

fn build_in_degree(graph: &HashMap<i32, HashSet<i32>>) {
    // 存储每个节点的入度数
    let mut in_degree = HashMap::new();

    // 初始化每个节点的入度数
    for &neighbor in graph.keys() {
        in_degree.insert(neighbor, 0);
    }

    // 计算每个节点的入度数
}

fn get_top_order(graph: &HashMap<i32, HashSet<i32>>) {
    // 计算每个节点的入度数
    let in_degree = build_in_degree(graph);
}