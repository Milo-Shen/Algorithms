// https://leetcode.cn/problems/number-of-orders-in-the-backlog/

use rust::{MaxHeap, MinHeap};

pub fn get_number_of_backlog_orders(orders: Vec<Vec<i32>>) -> i32 {
    let mut min_heap: MinHeap<i32> = MinHeap::new();
    let mut max_heap: MaxHeap<i32> = MaxHeap::new();

    const BUY: i32 = 0;
    const SELL: i32 = 1;

    for order in orders {
        let price = order[0];
        let amount = order[1];
        let order_type = order[2];

        if order_type == BUY {
            for _ in 0..amount {
                let min_price_sell = min_heap.peek();
                if min_price_sell.is_some() && min_price_sell.unwrap() <= price {
                    min_heap.pop();
                } else {
                    max_heap.push(price);
                }
            }
        }

        if order_type == SELL {
            for _ in 0..amount {
                let max_price_buy = max_heap.peek();
                if max_price_buy.is_some() && max_price_buy.unwrap() >= price {
                    max_heap.pop();
                } else {
                    min_heap.push(price);
                }
            }
        }
    }

    let flag = 10 ^ 9 + 7;

    (min_heap.size() as i32) % flag + (max_heap.size() as i32) % flag
}