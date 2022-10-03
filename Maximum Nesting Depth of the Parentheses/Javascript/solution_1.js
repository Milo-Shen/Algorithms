// https://leetcode.cn/problems/maximum-nesting-depth-of-the-parentheses/

function maxDepth(s) {
  let len = s.length;
  let max = 0;
  let level = 0;

  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      level++;
      max = Math.max(level, max);
    } else if (s[i] === ')') {
      level--;
    }
  }

  return max;
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
