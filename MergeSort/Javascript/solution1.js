function solution(a) {
  let arr_len = a.length;
  if (!a || !arr_len) {
    return;
  }

  let temp = [];
  merge_sort(a, 0, arr_len - 1, temp);
}

function merge_sort(arr, start, end, temp) {
  if (start >= end) {
    return;
  }

  let middle = ~~((start + end) / 2);
  merge_sort(arr, start, middle, temp);
  merge_sort(arr, middle + 1, end, temp);
  merge(arr, start, end, temp);
}

function merge(arr, start, end, temp) {
  let middle = ~~((start + end) / 2);
  let index = start;
  let left = start;
  let right = middle + 1;

  while (left <= middle && right <= end) {
    if (arr[left] < arr[right]) {
      temp[index++] = arr[left++];
    } else {
      temp[index++] = arr[right++];
    }
  }

  while (left <= middle) {
    temp[index++] = arr[left++];
  }

  while (right <= end) {
    temp[index++] = arr[right++];
  }

  for (let i = start; i <= end; i++) {
    arr[i] = temp[i];
  }
}

let arr = [3, 1, 2, 10, 1, 5, 6, -1, 9, 5];
solution(arr);
console.log(arr);
