// https://leetcode.cn/problems/count-the-digits-that-divide-a-number/

const countDigits = function (num) {
  let answer = 0;
  let number = num;

  while (number > 0) {
    if (num % (number % 10) === 0) {
      answer++;
    }
    number = ~~(number / 10);
  }

  return answer;
};

console.log(countDigits(121));
