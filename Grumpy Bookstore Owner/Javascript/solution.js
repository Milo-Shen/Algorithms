// https://leetcode.cn/problems/grumpy-bookstore-owner/
// https://www.lintcode.com/problem/1849/

function maxSatisfied(customers, grumpy, minutes) {
  // 异常检测
  let customers_lens = customers.length;
  if (!customers || !customers_lens) {
    return 0;
  }

  // 当前满意度
  let sum = 0;

  // 初始化满意的客户的数量
  for (let i = 0; i < customers_lens; i++) {
    if (i < minutes) {
      sum += customers[i];
    } else {
      sum += customers[i] * (1 - grumpy[i]);
    }
  }

  // 最大满意度
  let max_sum = sum;

  // 同向双指针
  let left = 0;
  let right = minutes;
  while (right < customers_lens) {
    if (grumpy[right] === 1) {
      sum += customers[right];
    }

    if (grumpy[left] === 1) {
      sum -= customers[left];
    }

    max_sum = Math.max(max_sum, sum);

    left++;
    right++;
  }

  return max_sum;
}

let customers = [1, 0, 1, 2, 1, 1, 7, 5];
let grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
let minutes = 3;
console.log(maxSatisfied(customers, grumpy, minutes));
