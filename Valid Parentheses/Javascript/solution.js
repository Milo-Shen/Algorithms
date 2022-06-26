// https://leetcode.cn/problems/valid-parentheses/

function isValid(s) {
  // 异常处理
  let s_len = s.length;
  if (!s || !s_len) {
    return true;
  }

  let stack = [];
  for (let i = 0; i < s_len; i++) {
    let bracket = s[i];
    let latest = stack[stack.length - 1];

    if (
      (latest === '(' && bracket === ')') ||
      (latest === '[' && bracket === ']') ||
      (latest === '{' && bracket === '}')
    ) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
}

// test cases
console.log(isValid('()'));
