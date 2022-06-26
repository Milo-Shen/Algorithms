use std::collections::HashMap;

pub struct UnionFind {
    father: HashMap<i32, i32>,
    size_of_set: HashMap<i32, i32>,
    num_of_set: i32,
}

impl UnionFind {
    // 初始化父指针，集合大小，集合数量
    pub fn new() -> Self {
        Self {
            father: HashMap::new(),
            size_of_set: HashMap::new(),
            num_of_set: 0,
        }
    }
}