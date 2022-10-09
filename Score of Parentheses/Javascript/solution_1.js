// https://leetcode.cn/problems/score-of-parentheses/

const scoreOfParentheses = function (s) {
  let deep = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      deep++;
    } else {
      deep--;
    }

    if (s[i] === ')' && s[i - 1] === '(') {
      answer += 1 << deep;
    }
  }

  return answer;
};

console.log(scoreOfParentheses('(()(()))'));
