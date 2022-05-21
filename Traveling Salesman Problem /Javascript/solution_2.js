// https://www.lintcode.com/problem/816/

function minCost(n, roads) {
  // 构建图
  let graph = build_graph(roads, n);
  let result = { min: Infinity };
  dfs(1, n, ['1'], new Set(['1']), 0, graph, result);
  return result.min;
}

function dfs(city, n, path, visited, cost, graph, result) {
  if (visited.size === n) {
    result.min = Math.min(result.min, cost);
    return;
  }

  for (let next_city in graph[city]) {
    if (!graph[city].hasOwnProperty(next_city) || visited.has(next_city)) {
      continue;
    }

    if (has_better_path(graph, path, city)) {
      continue;
    }

    path.push(next_city);
    visited.add(next_city);
    dfs(next_city, n, path, visited, cost + graph[city][next_city], graph, result);
    visited.delete(next_city);
    path.pop();
  }
}

function build_graph(roads, n) {
  let graph = {};

  // 初始化图
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      graph[i] = graph[i] || {};
      graph[i][j] = Infinity;
    }
  }

  // 开始构建图
  for (let [a, b, c] of roads) {
    graph[a][b] = Math.min(graph[a][b], c);
    graph[b][a] = Math.min(graph[b][a], c);
  }

  return graph;
}

function has_better_path(graph, path, city) {
  let len = path.length;
  for (let i = 1; i < len - 1; i++) {
    if (
      // todo: 这里这个剪枝的逻辑有问题，永远是 Infinity
      graph[path[i - 1][path[i]]] + graph[path[len - 1]][city] >
      graph[path[i - 1][path[len - 1]]] + graph[path[i][path[city]]]
    ) {
      return true;
    }
  }

  return false;
}

// test cases
let n = 10;
let tuple = [
  [1, 2, 5],
  [2, 3, 8],
  [3, 4, 7],
  [4, 5, 10],
  [5, 6, 4],
  [6, 7, 14],
  [7, 8, 11],
  [8, 9, 14],
  [9, 10, 15],
  [1, 9, 6],
  [10, 2, 9],
  [10, 8, 15],
  [4, 3, 4],
  [8, 6, 5],
  [10, 5, 6],
  [10, 9, 8],
  [2, 8, 13],
  [3, 2, 5],
  [3, 10, 5],
  [2, 7, 11],
];

console.log(minCost(n, tuple));
