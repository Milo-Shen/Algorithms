// https://leetcode-cn.com/problems/valid-palindrome/

function solution(s) {
  if (s === '') return true;

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !is_valid(s[left])) {
      left++;
    }
    while (left < right && !is_valid(s[right])) {
      right--;
    }
    if (left < right && s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function is_valid(s) {
  return /[0-9a-z]/i.test(s);
}
