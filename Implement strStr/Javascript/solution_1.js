// https://www.lintcode.com/problem/13/

// O(N^2) 的算法
function solution(source, target) {
  if (source === undefined || source === null || target === undefined || target === null) {
    return -1;
  }

  if (target === '') {
    return 0;
  }

  let sLen = source.length;
  let tLen = target.length;

  for (let i = 0; i < sLen - tLen + 1; i++) {
    let isMatch = true;

    for (let j = 0; j < tLen; j++) {
      if (source.charAt(i + j) !== target.charAt(j)) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      return i;
    }
  }

  return -1;
}
