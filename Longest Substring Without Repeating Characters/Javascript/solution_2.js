// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

// 使用二分法进行求解
function lengthOfLongestSubstring(s) {
  // 异常检测
  let s_len = s.length;
  if (s_len <= 1) {
    return s_len;
  }

  let left = 0;
  let right = s_len;

  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (is_valid(s, mid)) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (is_valid(s, right)) {
    return right;
  }

  if (is_valid(s, left)) {
    return left;
  }

  return 0;
}

function is_valid(s, num) {
  let s_len = s.length;

  let left = 0;
  let right = num - 1;

  while (right < s_len) {
    let visited = new Set();

    for (let i = left; i <= right; i++) {
      let char = s[i];
      visited.add(char);
    }

    if (visited.size === num) {
      return true;
    }

    left++;
    right++;
  }

  return false;
}

// test cases
let s = 'au';
console.log(lengthOfLongestSubstring(s));
