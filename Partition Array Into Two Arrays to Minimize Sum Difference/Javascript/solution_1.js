// https://leetcode.cn/problems/partition-array-into-two-arrays-to-minimize-sum-difference/
const minimumDifference = function (nums) {
  let n = nums.length / 2;
  let sum = 0;
  for (let num of nums) sum += num;
  let A = new Array(n),
    B = new Array(n);
  let X = [],
    Y = [];
  for (let i = 0; i <= n; i++) {
    if (i < n) {
      A[i] = nums[i];
      B[i] = nums[i + n];
    }
    X.push([]);
    Y.push([]);
  }
  for (let mask = 0; mask < 1 << n; mask++) {
    let count = 0;
    let cnt_a = 0,
      cnt_b = 0;
    for (let i = 0; i < n; i++) {
      if (((mask >> i) & 1) === 1) {
        cnt_a += A[i];
        cnt_b += B[i];
        count++;
      }
    }
    X[count].push(cnt_a);
    Y[count].push(cnt_b);
  }

  for (let i = 0; i <= n; i++) {
    Y[i].sort((a, b) => a - b);
  }

  // 进行二分查找答案
  let ans = Number.MAX_SAFE_INTEGER;
  for (let k = 0; k <= n; k++) {
    let x = X[k];
    let y = Y[n - k];
    for (let i of x) {
      let l = 0,
        r = y.length - 1;
      while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        let j = y[mid];
        if (i + j < sum / 2) {
          l = mid + 1;
        } else {
          r = mid;
        }
      }
      ans = Math.min(ans, Math.abs(sum - i - y[l] - (i + y[l])));
    }
  }
  return ans;
};
