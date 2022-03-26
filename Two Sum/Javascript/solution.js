// https://www.lintcode.com/problem/56/

function solution(numbers, target) {
  let hash = {};
  for (let i = numbers.length - 1; i >= 0; i--) {
    let remain = target - numbers[i];
    if (hash[remain] !== undefined) {
      return [i, hash[remain]];
    }
    hash[numbers[i]] = i;
  }
  return [-1, -1];
}

console.log(solution([1, 2, 3], 4));