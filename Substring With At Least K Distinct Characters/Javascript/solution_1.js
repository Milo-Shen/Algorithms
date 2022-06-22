// https://www.lintcode.com/problem/1375

function kDistinctCharacters(s, k) {
  // 异常检测
  let s_len = s.length;
  if (!s || !s_len) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < s_len; i++) {
    for (let j = 0; j < s_len; j++) {
      let set = new Set();
      for (let k = i; k <= j; k++) {
        set.add(s[k]);
      }
      if (set.size >= k) {
        total++;
      }
    }
  }

  return total;
}

let S = 'abcabcabcabc';
let k = 3;
console.log(kDistinctCharacters(S, k));
