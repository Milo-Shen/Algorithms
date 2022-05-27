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
  if (index === A.length) {
    if (temp.length === k) {
      let sum = temp.reduce((a, b) => a + b, 0);
      if (sum === target) {
        result.push([...temp]);
      }
    }
    return;
  }

  // 2. 递归的拆解
  // 选 A[index]
  temp.push(A[index]);
  dfs(A, k, target, index + 1, temp, result);

  // 不选 A[index]
  temp.pop();
  dfs(A, k, target, index + 1, temp, result);
}

// test cases
console.log(kSumII([1, 2, 3, 4], 2, 5));
