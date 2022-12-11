// https://leetcode.cn/problems/student-attendance-record-i/

const checkRecord = function (s) {
  return s.indexOf('A') === s.lastIndexOf('A') && !s.includes('LLL');
};

console.log(checkRecord('PPALLP'));
