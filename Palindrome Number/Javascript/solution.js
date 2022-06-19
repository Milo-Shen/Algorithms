// https://leetcode.cn/problems/palindrome-number/

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let s = String(x);
  if (s === '') return true;

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (left < right && !isEqual(s.charAt(left), s.charAt(right))) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function isEqual(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

// test cases
console.log(isPalindrome(121));
