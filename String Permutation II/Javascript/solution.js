// https://www.lintcode.com/problem/10
// https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/

function permutation(s) {
  let s_len = s.length;
  if (!s) {
    return [''];
  }

  let s_arr = s.split('').sort();

  let result = [];
  let visited = Array(s_len).fill(false);

  dfs(s_arr, '', result, visited);

  return result;
}

function dfs(s, substr, result, visited) {
  if (substr.length === s.length) {
    result.push(substr);
    return;
  }

  for (let i = 0, len = s.length; i < len; i++) {
    if (visited[i]) {
      continue;
    }

    if (i > 0 && s[i] === s[i - 1] && !visited[i - 1]) {
      continue;
    }

    visited[i] = true;
    dfs(s, substr + s[i], result, visited);
    visited[i] = false;
  }
}

// test cases
console.log(permutation('aba'));
