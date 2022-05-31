// https://leetcode.cn/problems/combination-sum-ii/
// https://www.lintcode.com/problem/153

// todo: 该解法在数据规模很大时，仍旧会有超时问题
function combinationSum2(candidates, target) {
  let result = [];

  if (!candidates || !candidates.length) {
    return result;
  }

  candidates = candidates.sort((a, b) => a - b);
  let set = new Set();

  dfs(candidates, target, 0, [], result, set);

  return result;
}

function dfs(candidates, target, start_index, subset, result, set) {
  if (target === 0 && !set.has(subset.join(''))) {
    set.add(subset.join(''));
    result.push([...subset]);
    return;
  }

  for (let i = start_index, len = candidates.length; i <= len; i++) {
    if (target < candidates[i]) {
      return;
    }

    subset.push(candidates[i]);
    dfs(candidates, target - candidates[i], i + 1, subset, result, set);
    subset.pop();
  }
}

// test cases
let candidates = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1,
];
let target = 30;
console.log(combinationSum2(candidates, target));
