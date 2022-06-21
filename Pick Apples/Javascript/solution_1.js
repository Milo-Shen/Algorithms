// https://www.lintcode.com/problem/1850/description

function pickApples(a, k, l) {
  // 异常检测
  let a_len = a.length;
  if (!a || !a_len) {
    return -1;
  }

  // 最大苹果数量
  let max_count = -1;

  // 使用隔板法
  for (let i = 0; i < a_len; i++) {
    // 枚举隔板 [0, i) [i, n)
    let left_k = getApples(a, 0, i, k);
    let right_l = getApples(a, i, a_len, l);
    let left_l = getApples(a, 0, i, l);
    let right_k = getApples(a, i, a_len, k);

    if (left_k !== -1 && right_l !== -1) {
      max_count = Math.max(max_count, left_k + right_l);
    }

    if (left_l !== -1 && right_k !== -1) {
      max_count = Math.max(max_count, left_l + right_k);
    }
  }

  return max_count;
}

function getApples(A, left, right, gap) {
  // 异常处理
  if (right - left < gap) {
    return -1;
  }

  // 初始化最大苹果数量
  let count = 0;
  let max_count = 0;

  for (let i = left, len = left + gap; i < len; i++) {
    count += A[i];
  }

  max_count = count;

  // 同向双指针
  let start = left;
  let end = left + gap;

  while (end < right) {
    count = count + A[end];
    count = count - A[start];
    max_count = Math.max(max_count, count);

    start++;
    end++;
  }

  return max_count;
}

// test cases
let A = [4, 5, 4, 5, 6, 4, 7, 10, 9, 1];
let K = 1;
let L = 4;
console.log(pickApples(A, K, L));
