// https://www.lintcode.com/problem/382/
// https://leetcode-cn.com/problems/valid-triangle-number/

function triangle_count(s) {
  let s_len = s.length;
  if (!s || s_len < 3) {
    return 0;
  }

  s = s.sort((a, b) => a - b);

  let count = 0;
  for (let i = 2; i < s_len; i++) {
    count += get_triangle_count(s, i);
  }

  return count;
}

function get_triangle_count(s, i) {
  let left = 0;
  let right = i - 1;
  let target = s[i];
  let count = 0;
  while (left < right) {
    let sum = s[left] + s[right];
    if (sum > target) {
      count += right - left;
      right--;
    } else {
      left++;
    }
  }
  return count;
}

console.log(triangle_count([3, 4, 6, 7]));
