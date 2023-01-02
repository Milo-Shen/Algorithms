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
      let min_price_sell = null;

      do {
        min_price_sell = min_heap.peek();

        if (min_price_sell && min_price_sell.price <= order_price) {
          min_heap.pop();
          order_amount -= min_price_sell.amount;

          if (order_amount < 0) {
            min_price_sell.amount = Math.abs(order_amount);
            min_heap.push(min_price_sell);
          }
        }
      } while (order_amount > 0 && !min_heap.isEmpty() && min_heap.peek().price <= order_price);

      if (order_amount > 0) {
        max_heap.push({ price: order_price, amount: order_amount });
      }
    }

    if (order_type === OrderType.SELL) {
      let max_price_buy = null;

      do {
        max_price_buy = max_heap.peek();

        if (max_price_buy && max_price_buy.price >= order_price) {
          max_heap.pop();
          order_amount -= max_price_buy.amount;

          if (order_amount < 0) {
            max_price_buy.amount = Math.abs(order_amount);
            max_heap.push(max_price_buy);
          }
        }
      } while (order_amount > 0 && !max_heap.isEmpty() && max_heap.peek().price >= order_price);

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

  return total % (Math.pow(10, 9) + 7);
};

const orders = [
  [10, 5, 0],
  [15, 2, 1],
  [25, 1, 1],
  [30, 4, 0],
];
console.log(getNumberOfBacklogOrders(orders));
