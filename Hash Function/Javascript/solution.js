// https://www.lintcode.com/problem/128/

function hashCode(key, HASH_SIZE) {
  let result = 0;
  for (let i = 0, len = key.length; i < len; i++) {
    result = result * 33 + key.charCodeAt(i);
    result = result % HASH_SIZE;
  }

  return result;
}

// test cases
console.log(hashCode('abcd', 1000));
