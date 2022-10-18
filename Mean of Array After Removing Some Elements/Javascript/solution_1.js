// https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/

const trimMean = function (arr) {
  if (!arr || !arr.length) {
    return 0;
  }

  arr.sort((a, b) => a - b);

  let len = arr.length;
  let start = ~~(len * 0.05);
  let end = len - start;
  let remain_len = end - start;

  let total = 0;

  for (let i = start; i < end; i++) {
    total = total + arr[i];
  }

  return total / remain_len;
};

console.log(trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]));
