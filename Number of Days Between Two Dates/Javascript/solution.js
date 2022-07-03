// https://leetcode.cn/problems/number-of-days-between-two-dates/

function daysBetweenDates(date1, date2) {
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  return Math.abs(date1 - date2) / 1000 / 60 / 60 / 24;
}
