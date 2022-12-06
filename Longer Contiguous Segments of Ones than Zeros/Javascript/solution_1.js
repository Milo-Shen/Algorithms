// https://leetcode.cn/problems/longer-contiguous-segments-of-ones-than-zeros/

const checkZeroOnes = function (s) {
  let [max0, max1, len0, len1] = [0, 0, 0, 0];

  for (let c of s) {
    if (c === '1') {
      len1 = len1 + 1;
      len0 = 0;
    } else {
      len0 = len0 + 1;
      len1 = 0;
    }

    max0 = Math.max(max0, len0);
    max1 = Math.max(max1, len1);
  }
  return max1 > max0;
};

console.log(checkZeroOnes('1101'));
