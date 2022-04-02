// Recursion with memory

// 1. 递归的定义: 函数接受什么样的参数，返回什么样的值，代表什么样的意思

let hash = {};
function fibonacci(n) {
  if (hash[n]) {
    return hash[n];
  }

  // 3. 递归的出口
  if (n <= 2) {
    return n - 1;
  }

  // 2. 递归的拆解
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  hash[n] = result;

  return result;
}

console.log(fibonacci(100));
