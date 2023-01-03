// https://www.lintcode.com/problem/140/

// 快速幂算法
function fastPower(a, b, n) {
  // ( a + b ) % c = ( a % c + b % c ) % c
  // ( a * b ) % c = ( a % c * b % c ) % c
  // ( a - b ) % c = ( a % c - b % c + c ) % c
  // ( a - b ) % c = ( ( ( a % c - b % c ) % c ) + c ) % c
  // 除法不符合上述公式
  // a^n = (a^n / 2) ^ 2   n % 2 === 0
  // a^n = ( (a^n / 2) ^ 2 ) * a   n % 2 === 1

  if (n === 0) {
    return 1 % b;
  }

  if (n === 1) {
    return a % b;
  }

  let product = fastPower(a, b, ~~(n / 2));
  product = ((product % b) * (product % b)) % b;

  if (n % 2 === 1) {
    product = (product * a) % b;
  }

  return product;
}

console.log(fastPower(3, 7, 5));
