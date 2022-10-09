// https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/

let hash = {};

const fib = function (n) {
  // 进行减枝操作
    if (hash[n]) {
        return hash[n];
    }

    // 3. 递归的出口
    if (n < 2) {
        return n;
    }

    // 2. 递归的拆解
    const result = fib(n - 1) + fib(n - 2);
    hash[n] = result;

    return result % 1000000007;
};

console.log(fib(45))