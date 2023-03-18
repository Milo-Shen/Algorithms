// https://leetcode.cn/problems/number-of-days-in-a-month/

const numberOfDays = function (year, month) {
  let day = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return 29;
  }

  return day[month];
};

console.log(numberOfDays(2000));
