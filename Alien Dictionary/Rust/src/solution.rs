// https://www.lintcode.com/problem/892/
// https://leetcode.cn/problems/Jf1JuT/

use std::cmp::{min, Reverse};
use std::collections::{HashMap, HashSet, BinaryHeap};

pub fn alien_order(words: Vec<String>) -> String {
    // 生成 graph
    let graph = build_graph(&words);

    if graph.is_none() {
        return String::new();
    }

    let graph = graph.unwrap();

    get_topological_sorting(&graph)
}

fn build_graph(words: &Vec<String>) -> Option<HashMap<char, HashSet<char>>> {
    let word_len = words.len();

    let mut graph: HashMap<char, HashSet<char>> = HashMap::new();

    // 将所有的 String 转换成 Vec<char>
    let mut word_vec: Vec<Vec<char>> = vec![];
    for i in 0..word_len {
        word_vec.push(words[i].chars().collect());
    }

    // 构建 Graph 的所有结点 node
    for i in 0..word_len {
        for j in 0..word_vec[i].len() {
            let node = word_vec[i][j];
            if !graph.contains_key(&node) {
                graph.insert(node, HashSet::new());
            }
        }
    }

    // 构建 Graph 的所有边 ( neighbors )
    for i in 0..word_len - 1 {
        let mut index = 0;
        while index < word_vec[i].len() && index < word_vec[i + 1].len() {
            if word_vec[i][index] != word_vec[i + 1][index] {
                graph.get_mut(&word_vec[i][index]).unwrap().insert(word_vec[i + 1][index]);
                break;
            }
            index = index + 1;
        }

        // 如果输入为 ["abc","ab"], "abc" 出现在 "ab" 前面不合法, graph 为 null
        if index == min(word_vec[i].len(), word_vec[i + 1].len()) {
            if word_vec[i].len() > word_vec[i + 1].len() {
                return None;
            }
        }
    }

    Some(graph)
}

fn get_in_degree(graph: &HashMap<char, HashSet<char>>) -> HashMap<char, usize> {
    // 存储每个节点的入度数
    let mut in_degree: HashMap<char, usize> = HashMap::new();

    // 初始化每个节点的入度数
    for (&node, _) in graph {
        in_degree.insert(node, 0);
    }

    // 计算每个节点的入度数
    for neighbors in graph.values() {
        for &neighbor in neighbors {
            in_degree.insert(neighbor, *in_degree.get(&neighbor).unwrap() + 1);
        }
    }

    in_degree
}

fn get_topological_sorting(graph: &HashMap<char, HashSet<char>>) -> String {
    // 计算入度
    let mut in_degree = get_in_degree(graph);

    let mut min_heap: BinaryHeap<Reverse<char>> = BinaryHeap::new();

    // 遍历过的节点数量和遍历过的路径
    let mut travel_path = String::new();
    let mut travel_count = 0;

    // 把所有入度为 0 的节点压入栈中
    for (&node, &degree) in &in_degree {
        if degree == 0 {
            min_heap.push(Reverse(node));
        }
    }

    // BFS 图
    while !min_heap.is_empty() {
        let node = min_heap.pop().unwrap().0;
        travel_path.push(node);
        travel_count = travel_count + 1;

        // 将当前节点的所有邻居节点的入度数 - 1
        let neighbors = graph.get(&node).unwrap();
        for &neighbor in neighbors {
            let neighbor_degree = *in_degree.get(&neighbor).unwrap() - 1;
            in_degree.insert(neighbor, neighbor_degree);

            // 如果发现有新的入度为 0 的节点, 则推入栈中
            if neighbor_degree == 0 {
                min_heap.push(Reverse(neighbor));
            }
        }
    }

    if travel_count == graph.len() { travel_path } else { String::new() }
}