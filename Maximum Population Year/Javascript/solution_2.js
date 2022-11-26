// https://leetcode.cn/problems/maximum-population-year/

const maximumPopulation = function (logs) {
  let year = Array(101).fill(0);

  for (let [birth, death] of logs) {
    for (let i = birth; i < death; i++) {
      year[i - 1950]++;
    }
  }

  let max = -Infinity;
  let index = 0;

  for (let i = 0; i < year.length; i++) {
    if (max >= year[i]) {
      continue;
    }

    max = year[i];
    index = i;
  }

  return index + 1950;
};

const logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];

console.log(maximumPopulation(logs));
