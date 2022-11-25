// https://leetcode.cn/problems/maximum-population-year/

const maximumPopulation = function (logs) {
  let year = Array(101).fill(0);

  for (let [birth, death] of logs) {
    for (let i = birth; i < death; i++) {
      year[i - 1950]++;
    }
  }

  return year
    .map((x, index) => [index + 1950, x])
    .sort((x, y) => {
      return y[1] - x[1] || x[0] - y[0];
    })[0][0];
};

const logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];

console.log(maximumPopulation(logs));
