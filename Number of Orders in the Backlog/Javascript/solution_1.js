// https://leetcode.cn/problems/number-of-orders-in-the-backlog/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');
const { MaxHeap } = require('../../Base/MaxHeap/Javascript/MaxHeap');

const getNumberOfBacklogOrders = function (orders) {
  const min_heap = new MinHeap();
  const max_heap = new MaxHeap();

  const OrderType = {
    BUY: 0,
    SELL: 1,
  };

  for (let i = 0, len = orders.length; i < len; i++) {
    let [price, amount, orderType] = orders[i];

    if (orderType === OrderType.BUY) {
      for (let j = 0; j < amount; j++) {
        let min_price_sell = min_heap.peek();
        if (min_price_sell && min_price_sell <= price) {
          min_heap.pop();
        } else {
          max_heap.push(price);
        }
      }
    }

    if (orderType === OrderType.SELL) {
      for (let j = 0; j < amount; j++) {
        let max_price_buy = max_heap.peek();
        if (max_price_buy && max_price_buy >= price) {
          max_heap.pop();
        } else {
          min_heap.push(price);
        }
      }
    }
  }

  return min_heap.size() + max_heap.size();
};

const orders = [
  [10, 5, 0],
  [15, 2, 1],
  [25, 1, 1],
  [30, 4, 0],
];
console.log(getNumberOfBacklogOrders(orders));
