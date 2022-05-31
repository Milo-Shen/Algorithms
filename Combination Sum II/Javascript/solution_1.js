// https://leetcode.cn/problems/combination-sum-ii/
// https://www.lintcode.com/problem/153

// todo: 下面这种解法的时间复杂度有可能超过时间限制，需要优化
function combinationSum2(candidates, target) {
  let result = [];
  let candidates_len = candidates.length;

  if (!candidates || !candidates.length) {
    return result;
  }

  let visited = Array(candidates_len).fill(0);
  let set = new Set();
  candidates = candidates.sort((a, b) => a - b);

  dfs(candidates, target, 0, visited, [], result, set);

  return result;
}

function dfs(candidates, target, start_index, visited, subset, result, set) {
  let sum = subset.reduce((a, b) => a + b, 0);
  if (sum === target && !set.has(subset.join(''))) {
    set.add(subset.join(''));
    result.push([...subset]);
  }

  for (let i = start_index, len = candidates.length; i <= len; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    subset.push(candidates[i]);
    dfs(candidates, target, i + 1, visited, subset, result, set);
    subset.pop();
    visited[i] = false;
  }
}

// test cases
let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum2(candidates, target));
