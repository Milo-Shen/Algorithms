// https://leetcode.cn/problems/number-of-orders-in-the-backlog/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');
const { MaxHeap } = require('../../Base/MaxHeap/Javascript/MaxHeap');

const getNumberOfBacklogOrders = function (orders) {
  const comparator = (a, b) => a.price - b.price;
  const min_heap = new MinHeap(comparator);
  const max_heap = new MaxHeap(comparator);

  const OrderType = {
    BUY: 0,
    SELL: 1,
  };

  for (let i = 0, len = orders.length; i < len; i++) {
    let [order_price, order_amount, order_type] = orders[i];

    if (order_type === OrderType.BUY) {
      while (order_amount > 0 && !min_heap.isEmpty() && min_heap.peek().price <= order_price) {
        let min_price_sell = min_heap.pop();
        order_amount -= min_price_sell.amount;

        if (order_amount < 0) {
          min_price_sell.amount = Math.abs(order_amount);
          min_heap.push(min_price_sell);
        }
      }

      if (order_amount > 0) {
        max_heap.push({ price: order_price, amount: order_amount });
      }
    }

    if (order_type === OrderType.SELL) {
      while (order_amount > 0 && !max_heap.isEmpty() && max_heap.peek().price >= order_price) {
        let max_price_buy = max_heap.pop();
        order_amount -= max_price_buy.amount;

        if (order_amount < 0) {
          max_price_buy.amount = Math.abs(order_amount);
          max_heap.push(max_price_buy);
        }
      }

      if (order_amount > 0) {
        min_heap.push({ price: order_price, amount: order_amount });
      }
    }
  }

  let total = 0;
  let flag = Math.pow(10, 9) + 7;

  while (min_heap.size()) {
    total = (total + min_heap.pop().amount) % flag;
  }

  while (max_heap.size()) {
    total = (total + max_heap.pop().amount) % flag;
  }

  return total;
};

const orders = [
  [10, 5, 0],
  [15, 2, 1],
  [25, 1, 1],
  [30, 4, 0],
];
console.log(getNumberOfBacklogOrders(orders));
