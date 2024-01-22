// https://www.lintcode.com/problem/200/
// https://leetcode-cn.com/problems/longest-palindromic-substring/

// 基于动态规划的方法
function longestPalindrome(s) {
  const str_len = s.length;
  if (!s || str_len === 0) return '';

  // 初始化数组
  let isPalindrome = [];
  for (let i = 0; i < str_len; i++) {
    let _array = [];
    _array.length = str_len;
    isPalindrome.push(_array);
  }

  // 因为单独的字符也是最长回文串，所以这里默认最长为 1 且从第一个字符开始
  let longest = 1;
  let start = 0;

  // 单个字符肯定是回文串
  for (let i = 0; i < str_len; i++) {
    isPalindrome[i][i] = true;
  }

  // 两个字符的情况，若是两字符相等，则也是回文串
  for (let i = 0; i < str_len - 1; i++) {
    isPalindrome[i][i + 1] = s.charAt(i) === s.charAt(i + 1);
    if (isPalindrome[i][i + 1]) {
      start = i;
      longest = 2;
    }
  }

  // 动态规划的递推公式为: isPalindrome[i][j] = isPalindrome[i + 1][j - 1] && s.charAt(i) === s.charAt(j)
  for (let len = 3; len <= str_len; len++) {
    for (let i = 0; i < str_len - len + 1; i++) {
      let j = i + len - 1;
      isPalindrome[i][j] = isPalindrome[i + 1][j - 1] && s.charAt(i) === s.charAt(j);
      if (isPalindrome[i][j] && j - i + 1 > longest) {
        start = i;
        longest = j - i + 1;
      }
    }
  }

  return s.substring(start, start + longest);
}

console.log(longestPalindrome('babad'));
