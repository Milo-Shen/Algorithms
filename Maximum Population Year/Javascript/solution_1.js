// https://leetcode.cn/problems/maximum-population-year/

const maximumPopulation = function (logs) {
  const map = new Map();

  for (let i = 0; i < logs.length; i++) {
    const [birth, death] = logs[i];

    if (!map.has(birth)) {
      map.set(birth, 0);
    }

    for (let [_birth, _] of map) {
      if (birth >= _birth && _birth < death) {
        let population = map.get(_birth) + 1;
        map.set(_birth, population);
      }
    }
  }

  return map;
};

const logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];

console.log(maximumPopulation(logs));
