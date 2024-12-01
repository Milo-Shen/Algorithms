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

  let middle = ~~((start + end) / 2);
  let pivot = arr[middle];

  let left = start;
  let right = end;

  while (left <= right) {
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

  quick_sort(arr, start, right);
  quick_sort(arr, left, end);
}

let arr = [3, 1, 2, 10, 1, 5, 6, -1, 9, 5];
solution(arr);
console.log(arr);
