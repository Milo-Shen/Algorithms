// https://leetcode.cn/problems/russian-doll-envelopes/description/

const maxEnvelopes = function (envelopes) {
  envelopes = envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }

    return a[0] - b[0];
  });

  let n = envelopes.length;
  let lis = Array(n + 1).fill(Infinity);
  lis[0] = -Infinity;

  let longest = 0;
  for (let i = 0; i < n; i++) {
    let index = firstGTE(lis, envelopes[i][1]);
    lis[index] = envelopes[i][1];
    longest = Math.max(longest, index);
  }

  return longest;
};

const firstGTE = function (nums, target) {
  let start = 0;
  let end = nums.length;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (nums[start] >= target) {
    return start;
  }

  return end;
};

console.log(
  maxEnvelopes([
    [10, 8],
    [1, 12],
    [6, 15],
    [2, 18],
  ]),
);
