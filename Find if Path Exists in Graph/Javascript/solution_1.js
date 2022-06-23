// https://leetcode.cn/problems/find-if-path-exists-in-graph/

function validPath(n, edges, source, destination) {
  // 异常处理
  if (source === destination) {
    return true;
  }

  if (!edges || !edges.length) {
    return false;
  }

  // 构建图
  let graph = buildGraph(n, edges);

  // BFS 树
  let queue = [source];
  let set = new Set([source]);

  while (queue.length) {
    let node = queue.shift();
    if (node === destination) {
      return true;
    }

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

  return false;
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

// test cases
let n = 3;
let edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
let start = 0;
let end = 2;
console.log(validPath(n, edges, start, end));
