// https://leetcode.cn/problems/number-of-equivalent-domino-pairs/

const numEquivDominoPairs = function (dominoes) {
  let result = 0;
  const num = new Array(100).fill(0);

  for (const domino of dominoes) {
    const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
    result += num[val];
    num[val]++;
  }

  return result;
};

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ]),
);
