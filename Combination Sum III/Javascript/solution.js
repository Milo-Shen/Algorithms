// https://leetcode.cn/problems/combination-sum-iii/

function combinationSum3(k, n) {
  let result = [];

  dfs(k, n, 1, 0, [], result);

  return result;
}

function dfs(k, target, start_index, depth, temp, result) {
  if (depth === k && target === 0) {
    result.push([...temp]);
    return;
  }

  if (depth === k || target <= 0) {
    return;
  }

  for (let i = start_index; i <= 9; i++) {
    temp.push(i);
    dfs(k, target - i, i + 1, depth + 1, temp, result);
    temp.pop();
  }
}

// test cases
console.log(combinationSum3(3, 7), count);
