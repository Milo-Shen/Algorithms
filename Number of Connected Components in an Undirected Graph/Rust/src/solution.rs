use Rust::UnionFind;

pub fn count_components(n: i32, edges: Vec<Vec<i32>>) -> i32 {
    // 异常处理
    let edge_len = edges.len();
    if edge_len == 0 {
        return n;
    }

    // 使用并查集处理此题
    let mut union_find = UnionFind::new();

    // 往并查集里新增所有节点
    for i in 0..n {
        union_find.add(i);
    }

    // 并查集合并节点
    for i in 0..edge_len {
        let u = edges[i][0];
        let v = edges[i][1];
        union_find.merge(u, v);
    }

    return union_find.get_num_of_set();
}