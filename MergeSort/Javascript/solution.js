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
  let left_index = start;
  let right_index = middle + 1;

  while (left_index <= middle && right_index <= end) {
    if (arr[left_index] < arr[right_index]) {
      temp[index++] = arr[left_index++];
    } else {
      temp[index++] = arr[right_index++];
    }
  }

  while (left_index <= middle) {
    temp[index++] = arr[left_index++];
  }

  while (right_index <= end) {
    temp[index++] = arr[right_index++];
  }

  for (let i = start; i <= end; i++) {
    arr[i] = temp[i];
  }
}

let arr = [3, 1, 2, 10, 1, 5, 6, -1, 9, 5];
solution(arr);
console.log(arr);
