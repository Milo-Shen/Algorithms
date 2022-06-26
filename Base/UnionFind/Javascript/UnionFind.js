class UnionFind {
  constructor() {
    // 初始化父指针，集合大小，集合数量
    this.father = new Map();
    this.size_of_set = new Map();
    this.num_of_set = 0;
  }

  /**
   * function: 增加新的节点进入并查集
   * @param x
   * @returns {boolean}
   */
  add(x) {
    // 如果已经出现，操作无效
    if (this.father.has(x)) {
      return false;
    }

    // 初始化点的父亲为空对象 null
    // 初始化该节点所在集合大小为 1
    // 集合数量 + 1
    this.father.set(x, null);
    this.size_of_set.set(x, 1);
    this.num_of_set++;

    return true;
  }

  /**
   * function: 查询并查集中某一节点的 root 节点
   * @param x
   * @returns {*}
   */
  find(x) {
    // 指针 root 指向被查找的点
    // 不断找 root 的父亲
    // 直到 root 指向 x 的根节点
    let root = x;
    while (this.father.get(root) !== null) {
      root = this.father.get(root);
    }

    // 将路径上所有的点指向根节点 root
    while (x !== root) {
      // 暂存 x 原本的父亲
      // 将 x 指向根节点
      // x 指针上移至 x 的父节点
      let origin_father = this.father.get(x);
      this.father.set(x, root);
      x = origin_father;
    }

    return root;
  }

  /**
   * function: 合并两个集合
   * @param x
   * @param y
   */
  merge(x, y) {
    // 找到两个节点的根
    let root_x = this.find(x);
    let root_y = this.find(y);

    // 如果不在同一个集合中则连接
    if (root_x !== root_y) {
      // 将一个点的根变成新的根
      // 集合数量 -1

      this.father.set(root_x, root_y);
      this.num_of_set--;

      // 计算新的根所在的集合大小
      let total = this.size_of_set.get(root_x) + this.size_of_set.get(root_y);
      this.size_of_set.set(root_y, total);
    }
  }

  /**
   * function: 两个点是否是连通的
   * @param x
   * @param y
   * @returns {boolean}
   */
  is_connected(x, y) {
    // 两个节点连通等价于两个节点的根相同
    return this.find(x) === this.find(y);
  }

  /**
   * function: 获取连通块的数量
   * @returns {number}
   */
  get_num_of_set() {
    return this.num_of_set;
  }

  /**
   * function: 找到当前连通块的大小
   * @param x
   * @returns {unknown}
   */
  get_size_of_set(x) {
    let root = this.find(x);
    return this.size_of_set.get(root);
  }
}

module.exports = {
  UnionFind,
};
