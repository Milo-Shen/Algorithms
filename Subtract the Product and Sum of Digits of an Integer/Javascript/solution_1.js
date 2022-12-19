// https://leetcode.cn/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

const subtractProductAndSum = function (n) {
  let sum = 0;
  let product = 1;

  while (n) {
    let num = n % 10;
    n = ~~(n / 10);

    sum += num;
    product *= num;
  }

  return product - sum;
};

console.log(subtractProductAndSum(234));
