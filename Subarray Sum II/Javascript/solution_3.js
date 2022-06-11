// https://www.lintcode.com/problem/404/

function subarraySumII(a, start, end) {
  // 异常处理
  if (!a || !a.length || start > end) {
    return [];
  }

  let result = { total: 0 };

  dfs(a, 0, [], result, start, end);

  return result.total;
}

function dfs(A, start_index, sub_array, result, start, end) {
  let total = sub_array.reduce((total, val) => total + A[val], 0);
  if (sub_array.length && start <= total && total <= end) {
    result.total++;
  }

  for (let i = start_index, len = A.length; i < len; i++) {
    if (sub_array.length && sub_array[sub_array.length - 1] + 1 !== i) {
      continue;
    }

    sub_array.push(i);
    dfs(A, i + 1, sub_array, result, start, end);
    sub_array.pop();
  }
}

// test cases
let A = [1, 2, 3, 4];
let start = 1;
let end = 3;
console.log(subarraySumII(A, start, end));
