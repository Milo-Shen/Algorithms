// https://leetcode.cn/problems/n-th-tribonacci-number/

let hash = {};
const tribonacci = function (n) {
  // 进行减枝操作
  if (hash[n]) {
    return hash[n];
  }

  // 3. 递归的出口
  if (n === 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  // 2. 递归的拆解
  const result = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  hash[n] = result;

  return result;
};

console.log(tribonacci(3));
