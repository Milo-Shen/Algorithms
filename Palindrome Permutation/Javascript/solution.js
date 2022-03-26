function solution(s) {
  if (s === '') return true;

  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}