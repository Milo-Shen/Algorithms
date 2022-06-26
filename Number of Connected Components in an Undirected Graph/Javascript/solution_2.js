// https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph/

const { UnionFind } = require('../../Base/UnionFind/Javascript/UnionFind');

// 使用并查集处理此题
function countComponents(n, edges) {
  // 特殊处理
  if (!edges || !edges.length) {
    return n;
  }

  // 使用并查集处理此题
  let union_find = new UnionFind();

  // 往并查集里新增所有节点
  for (let i = 0; i < n; i++) {
    union_find.add(i);
  }

  // 并查集合并节点
  for (let i = 0, len = edges.length; i < len; i++) {
    let [u, v] = edges[i];
    union_find.merge(u, v);
  }

  return union_find.num_of_set;
}

// test data
let n = 4;
let edges = [
  [2, 3],
  [1, 2],
  [1, 3],
];
console.log(countComponents(n, edges));
