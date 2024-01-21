// https://www.lintcode.com/problem/200/
// https://leetcode-cn.com/problems/longest-palindromic-substring/

// 基于中心线枚举的方法
function longestPalindrome(s) {
  const str_len = s.length;
  if (!s || str_len === 0) return;
  let longest = '';

  for (let i = 0; i < str_len; i++) {
    // odd case
    const oddPalindrome = getPalindromeFrom(s, i, i);
    if (longest.length < oddPalindrome.length) {
      longest = oddPalindrome;
    }

    // even case
    const evenPalindrome = getPalindromeFrom(s, i, i + 1);
    if (longest.length < evenPalindrome.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}

// 基于中心线枚举的算法
function getPalindromeFrom(s, left, right) {
  const str_len = s.length;
  while (left >= 0 && right < str_len) {
    if (s.charAt(left) !== s.charAt(right)) {
      break;
    }
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

console.log(longestPalindrome('babad'));
