// https://leetcode.cn/problems/sequence-reconstruction/
// https://www.lintcode.com/problem/605

use std::collections::{HashMap, HashSet};

pub fn sequence_reconstruction(nums: Vec<i32>, sequences: Vec<Vec<i32>>) -> bool {
    // 输入的长度
    let nums_len = nums.len();

    // 构建图
    let graph = build_graph(&sequences);

    // 计算遍历的路径
    let top_order = get_top_order(&graph);

    // 判断当前拓扑排序是否是唯一的
    if top_order.is_none() {
        return false;
    }

    let top_order = top_order.unwrap();

    if top_order.len() != nums_len {
        return false;
    }

    for i in 0..nums_len {
        if nums[i] != top_order[i] {
            return false;
        }
    }

    true
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

fn build_in_degree(graph: &HashMap<i32, HashSet<i32>>) -> HashMap<i32, i32> {
    // 存储每个节点的入度数
    let mut in_degree = HashMap::new();

    // 初始化每个节点的入度数
    for &neighbor in graph.keys() {
        in_degree.insert(neighbor, 0);
    }

    // 计算每个节点的入度数
    for neighbors in graph.values() {
        for &neighbor in neighbors {
            let neighbor_degree = *in_degree.get(&neighbor).unwrap() + 1;
            in_degree.insert(neighbor, neighbor_degree);
        }
    }

    in_degree
}

fn get_top_order(graph: &HashMap<i32, HashSet<i32>>) -> Option<Vec<i32>> {
    // 计算每个节点的入度数
    let mut in_degree = build_in_degree(graph);

    // 用于 BFS 的栈和最终结果
    let mut queue = vec![];
    let mut top_order = vec![];

    // 遍历过的节点数量
    let mut travel_count = 0;

    // 把入度数为 0 的节点压入栈中
    for (&node, &degree) in &in_degree {
        if degree == 0 {
            queue.push(node);
        }
    }

    // BFS 图
    while !queue.is_empty() {
        if queue.len() > 1 {
            return None;
        }

        let node = queue.remove(0);
        top_order.push(node);
        travel_count = travel_count + 1;

        // 它的邻居节点的入度数 - 1
        let neighbors = graph.get(&node).unwrap();
        for &neighbor in neighbors {
            let neighbor_degree = *in_degree.get(&neighbor).unwrap() - 1;
            in_degree.insert(neighbor, neighbor_degree);

            // 如果发现当前节点的入度数为 0, 则重新压入栈中
            if neighbor_degree == 0 {
                queue.push(neighbor);
            }
        }
    }

    if graph.len() == travel_count { Some(top_order) } else { None }
}