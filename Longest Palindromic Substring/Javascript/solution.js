function solution_1(s) {
  const str_len = s.length;
  if (!s || str_len === 0) return;
  let longest = '';

  // odd case
  for (let i = 0; i < str_len; i++) {
    const oddPalindrome = getPalindromeFrom(s, i, i);
    if (longest.length < oddPalindrome.length) {
      longest = oddPalindrome;
    }
  }

  // even case
  for (let i = 0; i < str_len; i++) {
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
  while (left >= 0 && right <= str_len) {
    if (s.charAt(left) !== s.charAt(right)) {
      break;
    }
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}