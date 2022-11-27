// https://leetcode.cn/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

const minPartitions = function (n) {
  let ans = 0;

  for (let num of String(n).split('')) {
    ans = Math.max(~~num, ans);
  }

  return ans;
};

console.log(minPartitions(8));
