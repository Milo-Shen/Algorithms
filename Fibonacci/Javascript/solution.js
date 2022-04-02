// Recursion

function fibonacci(n) {
  if (n <= 2) {
    return n - 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
