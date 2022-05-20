// https://www.lintcode.com/problem/816/

function minCost(n, roads) {
  // 构建图
  let graph = build_graph(roads, n);
  let result = { min: Infinity };
}

function build_graph(roads, n) {
  let graph = [];

  // 使用邻接矩阵的方式构建图
  for (let i = 0; i <= n; i++) {
    let temp = [];
    for (let j = 0; j <= n; j++) {
      temp[j] = Infinity;
    }
    graph.push(temp);
  }

  // 开始构建图
  for (let [a, b, c] of roads) {
    graph[a][b] = Math.min(graph[a][b], c);
    graph[a][b] = Math.min(graph[b][a], c);
  }

  return graph;
}

// test cases
let n = 3;
let tuple = [
  [1, 2, 1],
  [2, 3, 2],
  [1, 3, 3],
];
console.log(minCost(n, tuple));
