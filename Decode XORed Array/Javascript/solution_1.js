// https://leetcode.cn/problems/decode-xored-array/

const decode = function (encoded, first) {
  const n = encoded.length + 1;
  const answer = new Array(n).fill(0);

  answer[0] = first;

  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] ^ encoded[i - 1];
  }

  return answer;
};

console.log(decode([1, 2, 3], 1));
