// https://leetcode.cn/problems/first-letter-to-appear-twice/

const repeatedCharacter = function (s) {
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (seen.has(ch)) {
      return ch;
    }
    seen.add(ch);
  }

  return '';
};

console.log(repeatedCharacter('abccbaacz'));
