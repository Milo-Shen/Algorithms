// https://leetcode.cn/problems/combination-sum-ii/
// https://www.lintcode.com/problem/153

function combinationSum2(candidates, target) {
  let result = [];

  if (!candidates || !candidates.length) {
    return result;
  }

  candidates = candidates.sort((a, b) => a - b);

  dfs(candidates, target, 0, [], result);

  return result;
}

function dfs(candidates, target, start_index, subset, result) {
  if (target === 0) {
    result.push([...subset]);
    return;
  }

  for (let i = start_index, len = candidates.length; i <= len; i++) {
    // todo: 理解此处去重逻辑的含义
    if (i !== start_index && candidates[i] === candidates[i - 1]) {
      continue;
    }

    if (target < candidates[i]) {
      return;
    }

    subset.push(candidates[i]);
    dfs(candidates, target - candidates[i], i + 1, subset, result);
    subset.pop();
  }
}

// test cases
let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum2(candidates, target));
