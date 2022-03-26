// https://www.lintcode.com/problem/594

// O(N^2) 的算法
function solution(source, target) {
  if (source === undefined || source === null || target === undefined || target === null) {
    return -1;
  }

  if (target === '') {
    return 0;
  }

  const BASE = 1e6;
  const t_len = target.length;
  const s_len = source.length;

  // a * 31 ^ m
  let power = 1;
  for (let i = 0; i < t_len; i++) {
    power = (power * 31) % BASE;
  }

  // target code
  let target_code = 0;
  for (let i = 0; i < t_len; i++) {
    target_code = (target_code * 31 + target.charCodeAt(i)) % BASE;
  }

  let hash_code = 0;
  for (let i = 0; i < s_len; i++) {
    // abc + d
    hash_code = (hash_code * 31 + source.charCodeAt(i)) % BASE;
    if (i < t_len - 1) {
      continue;
    }

    // abcd - a
    if (i >= t_len) {
      hash_code = hash_code - ((source.charCodeAt(i - t_len) * power) % BASE);
      if (hash_code < 0) {
        hash_code += BASE;
      }
    }

    // double check
    if (hash_code === target_code && source.substring(i - t_len + 1, i + 1) === target) {
      return i - t_len + 1;
    }
  }

  return -1;
}
