// https://www.lintcode.com/problem/1790/

function RotateString2(str, left, right) {
  let str_len = str.length;

  // 这里移动的长度有可能超出字符串的长度，所以这里需要 % 一下字符串的长度
  // 对数组和字符串进行操作时, 时刻要注意越界的情况
  let iter = Math.abs(left - right) % str_len;
  let is_left = left > right;

  if (iter === 0 || str_len === 0) {
    return str;
  }

  let str_arr = str.split('');
  let left_part = is_left ? str_arr.slice(iter) : str_arr.slice(str_len - iter);
  let right_part = is_left ? str_arr.slice(0, iter) : str_arr.slice(0, str_len - iter);

  return left_part.concat(right_part).join('');
}

console.log(RotateString2('abcdefg', 3, 1));
console.log(RotateString2('abcdefg', 0, 0));
console.log(RotateString2('abcdefg', 1, 2));
