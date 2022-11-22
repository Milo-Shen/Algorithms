// https://leetcode.cn/problems/replace-all-digits-with-characters/

const replaceDigits = function (s) {
  s = s.split('');

  for (let i = 1; i < s.length; i += 2) {
    s[i] = String.fromCharCode(s[i - 1].charCodeAt(0) + ~~s[i]);
  }

  return s.join('');
};

console.log(replaceDigits('a1c1e1'));
