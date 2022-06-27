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

    // 增加新的节点进入并查集
    pub fn add(&mut self, x: i32) -> bool {
        // 如果已经出现，操作无效
        if self.father.contains_key(&x) {
            return false;
        }

        // 初始化点的父亲为空对象 null ( 这里因为 rust 支持 Option，所以省略初始化 )
        // 初始化该节点所在集合大小为 1
        // 集合数量 + 1
        self.size_of_set.insert(x, 1);
        self.num_of_set = self.num_of_set + 1;

        true
    }

    // 查询并查集中某一节点的 root 节点
    pub fn find(&mut self, x: i32) -> i32 {
        // 指针 root 指向被查找的点
        // 不断找 root 的父亲
        // 直到 root 指向 x 的根节点
        let mut root = x;

        while self.father.get(&root).is_some() {
            root = *self.father.get(&root).unwrap();
        }

        // 将路径上所有的点指向根节点 root
        let mut p = x;
        while p != root {
            // 暂存 p 原本的父亲
            // 将 p 指向根节点
            // p 指针上移至 p 的父节点
            let origin_father = *self.father.get(&p).unwrap();
            self.father.insert(p, root);
            p = origin_father;
        }

        root
    }

    // 合并两个集合
    pub fn merge(&mut self, x: i32, y: i32) {
        // 找到两个节点的根
        let root_x = self.find(x);
        let root_y = self.find(y);

        // 如果不在同一个集合中则连接
        if root_x != root_y {
            // 将一个点的根变成新的根
            // 集合数量 -1

            self.father.insert(root_x, root_y);
            self.num_of_set = self.num_of_set - 1;

            // 计算新的根所在的集合大小
            let total = *self.size_of_set.get(&root_x).unwrap() + *self.size_of_set.get(&root_y).unwrap();
            self.size_of_set.insert(root_y, total);
        }
    }

    pub fn has_connected(&mut self, x: i32, y: i32) -> bool {
        // 两个节点连通等价于两个节点的根相同
        return self.find(x) == self.find(y);
    }

    pub fn get_num_of_set(&self) -> i32 {
        return self.num_of_set;
    }

    pub fn get_size_of_set(&mut self, x: i32) -> i32 {
        let root = self.find(x);
        *self.size_of_set.get(&root).unwrap()
    }
}