// https://www.lintcode.com/problem/130/

function heapify(A) {
  for (let i = 0, len = A.length; i < len; i++) {
    siftup(A, i);
  }
}

function siftup(A, k) {
  while (k !== 0) {
    let father = ~~((k - 1) / 2);
    if (A[k] > A[father]) {
      break;
    }
    let temp = A[k];
    A[k] = A[father];
    A[father] = temp;
    k = father;
  }
}

// test cases
let A = [3, 2, 1, 4, 5];
heapify(A);
console.log(A);
