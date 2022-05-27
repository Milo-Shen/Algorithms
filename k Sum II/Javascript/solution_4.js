// https://www.lintcode.com/problem/90

function kSumII(a, k, target) {
  if (!a || !a.length) {
    return [];
  }

  let result = [];

  dfs(a, k, target, 0, 0, [], result);

  return result;
}

function dfs(A, k, target, start_index, depth, temp, result) {
  if (depth === k && target === 0) {
    result.push([...temp]);
    return;
  }

  if (depth === k || target <= 0) {
    return;
  }

  for (let i = start_index, len = A.length; i < len; i++) {
    temp.push(A[i]);
    dfs(A, k, target - A[i], i + 1, depth + 1, temp, result);
    temp.pop();
  }
}

// test cases
console.log(kSumII([1, 2, 3, 4], 2, 5));
