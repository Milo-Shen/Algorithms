// https://leetcode.cn/problems/find-if-path-exists-in-graph/

use std::collections::{HashMap, HashSet};

pub fn valid_path(n: i32, edges: Vec<Vec<i32>>, source: i32, destination: i32) -> bool {
    // 异常处理
    if source == destination {
        return true;
    }

    if edges.len() == 0 {
        return false;
    }

    // 构建图
    let graph = build_graph(n, &edges);

    // BFS 图
    let mut queue = vec![source];
    let mut visited = HashSet::from([source]);

    while !queue.is_empty() {
        let node = queue.remove(0);
        if node == destination {
            return true;
        }

        // 遍历 node 的 neighbor
        let neighbors = graph.get(&node).unwrap();
        for &neighbor in neighbors {
            if visited.contains(&neighbor) {
                continue;
            }

            queue.push(neighbor);
            visited.insert(neighbor);
        }
    }

    false
}

fn build_graph(n: i32, edges: &Vec<Vec<i32>>) -> HashMap<i32, HashSet<i32>> {
    let mut graph: HashMap<i32, HashSet<i32>> = HashMap::new();

    // 构建所有的图的节点 node
    for i in 0..n {
        graph.insert(i, HashSet::new());
    }

    // 构建所有的边
    let edges_len = edges.len();
    for i in 0..edges_len {
        let u = edges[i][0];
        let v = edges[i][1];
        graph.get_mut(&u).unwrap().insert(v);
        graph.get_mut(&v).unwrap().insert(u);
    }

    graph
}