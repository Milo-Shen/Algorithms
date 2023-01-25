// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

const reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n);
};

console.log(reverseLeftWords('123456', 2));
