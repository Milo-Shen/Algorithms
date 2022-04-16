// https://www.lintcode.com/problem/1790/

// 下面这种做法的效率比较低，会超时
function RotateString2(str, left, right) {
  let str_len = str.length;
  let iter = Math.abs(right - left);

  if (iter === 0 || str_len === 0) {
    return str;
  }

  let str_arr = str.split('');

  for (let i = 0; i < iter; i++) {
    if (left > right) {
      let temp = str_arr[0];
      for (let j = 0; j < str_arr.length - 1; j++) {
        str_arr[j] = str_arr[j + 1];
      }
      str_arr[str_len - 1] = temp;
    }

    if (left < right) {
      let temp = str_arr[str_len - 1];
      for (let j = str_len - 1; j > 0; j--) {
        str_arr[j] = str_arr[j - 1];
      }
      str_arr[0] = temp;
    }
  }

  return str_arr.join("");
}

console.log(RotateString2('abcdefg', 3, 1));
console.log(RotateString2('abcdefg', 0, 0));
console.log(RotateString2('abcdefg', 1, 2));