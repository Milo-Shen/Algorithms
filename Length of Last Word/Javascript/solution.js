// https://leetcode.cn/problems/length-of-last-word/

function lengthOfLastWord(s) {
  let s_len = s.length;

  // 异常检测
  if (!s_len) {
    return 0;
  }

  let max_len = 0;
  let i = s_len - 1;

  for (i; i >= 0; i--) {
    if (s[i] !== ' ') {
      break;
    }
  }

  for (i; i >= 0; i--) {
    if (s[i] === ' ') {
      break;
    }
    max_len++;
  }

  return max_len;
}

let s = '   fly me   to   the moon  ';
console.log(lengthOfLastWord(s));
