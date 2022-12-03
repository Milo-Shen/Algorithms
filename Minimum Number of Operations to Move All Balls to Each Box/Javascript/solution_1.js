// https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

const minOperations = function (boxes) {
  const len = boxes.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    let sum = 0;

    for (let j = 0; j < len; j++) {
      if (boxes[j] === '1') {
        sum += Math.abs(j - i);
      }
    }

    result.push(sum);
  }

  return result;
};

console.log(minOperations('110'));
