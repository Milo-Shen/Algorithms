// https://leetcode.cn/problems/number-of-subsings-with-only-1s/

const numSub = function (s) {
  let s_len = s.length;

  let j = 1;
  let answer = 0;

  for (let i = 0; i < s_len; i++) {
    if (s[i] !== '1') {
      continue;
    }

    j = Math.max(j, i + 1);
    while (j < s_len && s[j] === '1') {
      j++;
    }

    answer += j - i;
  }

  return answer % (Math.pow(10, 9) + 7);
};

console.log(numSub('0110111'));
