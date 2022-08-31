// https://leetcode.cn/problems/combinations/

function combine(n, k) {
  let result = [];

  let visited = Array(n).fill(false);
  dfs(n, k, 0, 1, visited, [], result);

  return result;
}

function dfs(n, k, depth, start_index, visited, subset, result) {
  if (depth === k) {
    result.push([...subset]);
    return;
  }

  for (let i = start_index; i <= n; i++) {
    subset.push(i);
    dfs(n, k, depth + 1, i + 1, visited, subset, result);
    subset.pop();
  }
}

// test cases
console.log(combine(4, 2));
