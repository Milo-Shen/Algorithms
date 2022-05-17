// https://www.lintcode.com/problem/730/solution/57707

function subSum(n) {
  if (n === 1) {
    return 1;
  }

  let singleSum = 0;
  for (let i = 1; i <= n; i++) {
    singleSum += i;
  }

  return singleSum * Math.pow(2, n - 1);
}
