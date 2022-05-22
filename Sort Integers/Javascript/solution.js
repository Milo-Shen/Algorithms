// https://www.lintcode.com/problem/463/

function sortIntegers(A) {
  let len = A.length;
  if (!A || !len) {
    return [];
  }

  quick_sort(A, 0, len - 1);
  return A;
}

function quick_sort(A, start, end) {
  if (start >= end) {
    return;
  }

  let left = start;
  let right = end;
  let pivot = A[~~((start + end) / 2)];

  while (left <= right) {
    while (left <= right && A[left] < pivot) {
      left++;
    }

    while (left <= right && A[right] > pivot) {
      right--;
    }

    if (left <= right) {
      let temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      left++;
      right--;
    }
  }

  quick_sort(A, start, right);
  quick_sort(A, left, end);
}

// test cases
let nums = [3, 2, 1, 4, 5];
console.log(sortIntegers(nums));
