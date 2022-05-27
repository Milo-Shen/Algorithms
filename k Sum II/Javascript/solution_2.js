// https://www.lintcode.com/problem/90

function kSumII(a, k, target) {
  if (!a || !a.length) {
    return [];
  }

  let result = [];

  dfs(a, k, target, 0, [], result);

  return result;
}

function dfs(A, k, target, index, temp, result) {
  if (k === 0 && target === 0) {
    result.push([...temp]);
    return;
  }

  if (k === 0 || target <= 0) {
    return;
  }

  for (let i = index, len = A.length; i < len; i++) {
    temp.push(A[i]);
    dfs(A, k - 1, target - A[i], index + 1, temp, result);
    temp.pop();
  }
}

// test cases
console.log(kSumII([1, 2, 3, 4], 2, 5));
