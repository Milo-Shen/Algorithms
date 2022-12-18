// https://www.lintcode.com/problem/1870/

function stringCount(str) {
  let str_len = str.length;

  let j = 1;
  let answer = 0;

  for (let i = 0; i < str_len; i++) {
    if (str[i] !== '0') {
      continue;
    }

    j = Math.max(j, i + 1);
    while (j < str_len && str[j] === '0') {
      j++;
    }

    answer += j - i;
  }

  return answer;
}

console.log(stringCount('00010011'));
