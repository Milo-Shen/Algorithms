// https://www.lintcode.com/problem/976/
function four_sum_count(A, B, C, D) {
  if (!A || !A.length) {
    return 0;
  }

  // 使用 two sum 的逻辑即可解决
  let hash = {};
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j];
      hash[sum] = (hash[sum] || 0) + 1;
    }
  }

  let total = 0;
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let target = -(C[i] + D[j]);
      total += hash[target] || 0;
    }
  }

  return total;
}
