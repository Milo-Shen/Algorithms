// https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph/

function countComponents(n, edges) {
  // 特殊处理
  if (!edges || !edges.length) {
    return n;
  }

  // 构建图
  let graph = buildGraph(n, edges);
}

function buildGraph(n, edges) {
  let graph = new Map();

  // 构建所有的图的节点 node
  for (let i = 0; i < n; i++) {
    graph.set(i, new Set());
  }

  // 构建所有的边
  for (let i = 0, len = edges.length; i < len; i++) {
    let [u, v] = edges[i];
    graph.get(u).add(v);
    graph.get(v).add(u);
  }

  return graph;
}

// test data
let n = 5;
let edges = [
  [0, 1],
  [1, 2],
  [3, 4],
];
console.log(n, edges);
