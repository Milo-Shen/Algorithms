// https://leetcode.cn/problems/count-asterisks/

const countAsterisks = function (s) {
  let flag = true;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') {
      flag = !flag;
    }

    if (flag && s[i] === '*') {
      count++;
    }
  }

  return count;
};

console.log(countAsterisks('l|*e*et|c**o|*de|'));
