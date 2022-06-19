// https://www.lintcode.com/problem/438/description

function copyBooksII(n, times) {
  // 异常处理
  if (!n) {
    return 0;
  }
  // 对答案进行二分 ( 最小答案为 0, 最大答案为 times[0] * n )
  let left = 0;
  let right = times[0] * n;

  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (can_finish(n, times, mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (can_finish(n, times, left)) {
    return left;
  }

  if (can_finish(n, times, right)) {
    return right;
  }

  return -1;
}

function can_finish(n, times, days) {
  let total = 0;
  for (let i = 0, len = times.length; i < len; i++) {
    total += Math.floor(days / times[i]);
  }
  return total >= n;
}

// test cases
console.log(copyBooksII(4, [3, 2, 4]));
