// https://leetcode.cn/problems/find-the-highest-altitude/

const largestAltitude = function (gain) {
  let altitude = 0;
  let max_altitude = 0;

  for (let i = 0; i < gain.length; i++) {
    altitude = gain[i] + altitude;
    max_altitude = max_altitude > altitude ? max_altitude : altitude;
  }

  return max_altitude;
};

// test cases
console.log(largestAltitude([-5, 1, 5, 0, -7]));
