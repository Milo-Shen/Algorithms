// https://leetcode.cn/problems/maximum-population-year/

const maximumPopulation = function (logs) {
  const map = new Map();

  for (let i = 0; i < logs.length; i++) {
    const [birth, death] = logs[i];

    if (!map.has(birth)) {
      map.set(birth, 1);
      continue;
    }

    map.set(birth, map.get(birth) + 1);
  }
};

const logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];

console.log(maximumPopulation(logs));
