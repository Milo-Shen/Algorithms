// https://www.lintcode.com/problem/891/
// https://leetcode-cn.com/problems/valid-palindrome-ii/

function solution(s) {
  if (s === '') {
    return true;
  }

  let pair = findDifference(s, 0, s.length - 1);
  if (pair.left >= pair.right) {
    return true;
  }

  return isPalindrome(s, pair.left + 1, pair.right) || isPalindrome(s, pair.left, pair.right - 1);
}

function findDifference(s, left, right) {
  while (left < right && s.charAt(left) === s.charAt(right)) {
    left++;
    right--;
  }
  return { left, right };
}

function isPalindrome(s, left, right) {
  let pair = findDifference(s, left, right);
  return pair.left >= pair.right;
}

console.log(solution('aba'));
