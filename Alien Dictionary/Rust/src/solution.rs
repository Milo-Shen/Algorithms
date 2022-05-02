use std::cmp::min;
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

fn get_in_degree(graph: &HashMap<char, HashSet<char>>) {}

fn get_topological_sorting(graph: &HashMap<char, HashSet<char>>) -> String {
    String::new()
}