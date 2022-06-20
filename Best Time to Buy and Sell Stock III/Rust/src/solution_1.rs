// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/
// https://www.lintcode.com/problem/151/

use std::cmp::{max, min};

pub fn max_profit(prices: Vec<i32>) -> i32 {
    let n = prices.len();
    let mut max_cost = 0;

    for i in 0..n {
        let left_cost = get_cost(&prices, 0, i);
        let right_cost = get_cost(&prices, i, n);
        max_cost = max(max_cost, left_cost + right_cost);
    }

    return max_cost;
}

fn get_cost(prices: &Vec<i32>, left: usize, right: usize) -> i32 {
    let mut min_prices = i32::MAX;
    let mut cost = 0;

    for i in left..right {
        min_prices = min(min_prices, prices[i]);
        cost = max(cost, prices[i] - min_prices);
    }

    return cost;
}