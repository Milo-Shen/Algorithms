// https://www.lintcode.com/problem/178/description
// https://leetcode.cn/problems/graph-valid-tree/

function validTree(n, edges) {
  // 特殊处理
  if (!n || edges.length !== n - 1) {
    return false;
  }

  // 构建图
  let graph = buildGraph(n, edges);

  // BFS 图
  return BFS(n, graph);
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

function BFS(n, graph) {
  let queue = [0];
  let set = new Set([0]);

  while (queue.length) {
    let node = queue.shift();

    // 遍历 node 的 neighbor
    let neighbors = graph.get(node);
    for (let neighbor of neighbors) {
      if (set.has(neighbor)) {
        continue;
      }
      queue.push(neighbor);
      set.add(neighbor);
    }
  }

  return set.size === n;
}

// test cases
let n = 5;
let edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];
console.log(validTree(n, edges));
