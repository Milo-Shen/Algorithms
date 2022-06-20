// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/
// https://www.lintcode.com/problem/151/

function maxProfit(prices) {
  let n = prices.length;
  let max_cost = 0;

  for (let i = 0; i < n; i++) {
    // 枚举隔板 [0, i) [i, n)
    let left_cost = getCost(prices, 0, i);
    let right_cost = getCost(prices, i, n);
    max_cost = Math.max(max_cost, left_cost + right_cost);
  }

  return max_cost;
}

function getCost(prices, left, right) {
  let minPrice = Infinity;
  let cost = 0;
  for (let i = left; i < right; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    cost = Math.max(cost, prices[i] - minPrice);
  }
  return cost;
}

// test cases
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
