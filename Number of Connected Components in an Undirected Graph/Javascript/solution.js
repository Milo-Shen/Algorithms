// https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph/

function countComponents(n, edges) {
  // 特殊处理
  if (!edges || !edges.length) {
    return n;
  }

  // 构建图
  let graph = buildGraph(n, edges);

  // 访问过的节点
  let visited = Array(n).fill(false);

  // 连通分量的数目
  let count = 0;

  // 开始遍历每一个节点, 看看是否被访问过了
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      BFS(graph, i, edges, visited);
      count++;
    }
  }

  return count;
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

function BFS(graph, node, edges, visited) {
  let queue = [node];
  visited[node] = true;

  while (queue.length) {
    let node = queue.shift();
    // 遍历 node 的 neighbor
    let neighbors = graph.get(node);
    for (let neighbor of neighbors) {
      if (visited[neighbor]) {
        continue;
      }
      queue.push(neighbor);
      visited[neighbor] = true;
    }
  }
}

// test data
let n = 4;
let edges = [
  [2, 3],
  [1, 2],
  [1, 3],
];
console.log(countComponents(n, edges));
