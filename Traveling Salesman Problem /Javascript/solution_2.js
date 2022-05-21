// https://www.lintcode.com/problem/816/

function minCost(n, roads) {
  // 构建图
  let graph = build_graph(roads);
  let result = { min: Infinity };
  dfs(1, n, ['1'], new Set(['1']), 0, graph, result);
  return result.min;
}

function dfs(city, n, path, visited, cost, graph, result) {
  if (visited.size === n) {
    result.min = Math.min(result.min, cost);
    return;
  }

  console.log(path, city);

  for (let next_city in graph[city]) {
    if (!graph[city].hasOwnProperty(next_city) || visited.has(next_city)) {
      continue;
    }

    path.push(next_city);
    visited.add(next_city);
    dfs(next_city, n, path, visited, cost + graph[city][next_city], graph, result);
    visited.delete(next_city);
    path.pop();
  }
}

function build_graph(roads) {
  let graph = {};

  // 开始构建图
  for (let [a, b, c] of roads) {
    graph[a] = graph[a] || {};
    graph[a][b] = graph[a][b] || Infinity;

    graph[b] = graph[b] || {};
    graph[b][a] = graph[b][a] || Infinity;

    graph[a][b] = Math.min(graph[a][b], c);
    graph[b][a] = Math.min(graph[b][a], c);
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
