function solution(a) {
  let arr_len = a.length;
  if (!a || !arr_len) {
    return;
  }

  quick_sort(a, 0, arr_len - 1);
}

function quick_sort(arr, start, end) {
  // start 是有可能大于 end 的，例子: start: 0, end: -1
  if (start >= end) {
    return;
  }

  let left = start;
  let right = end;
  let pivot = arr[~~((start + end) / 2)];

  // 这里必须是 left <= right, 考虑 [1, 2] 的情况
  while (left <= right) {
    // 这里不能 arr[left] <= pivot 必须是 arr[left] < pivot
    // 否则会 stack overflow, 或是造成无法均分
    while (left <= right && arr[left] < pivot) {
      left++;
    }

    while (left <= right && arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  // 这里必须是 start, 因为后续的 start，有可能是之前的 left
  quick_sort(arr, start, right);
  quick_sort(arr, left, end);
}

let arr = [3, 1, 2, 10, 1, 5, 6, -1, 9, 5];
solution(arr);
console.log(arr);
