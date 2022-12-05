// https://leetcode.cn/problems/minimum-amount-of-time-to-collect-garbage/

const garbageCollection = function (garbage, travel) {
  let m_to = -1;
  let p_to = -1;
  let g_to = -1;
  let time = 0;

  for (let i = garbage.length - 1; i >= 0; i--) {
    if (m_to === -1 && garbage[i].includes('M')) {
      m_to = i;
    }
    if (p_to === -1 && garbage[i].includes('P')) {
      p_to = i;
    }
    if (g_to === -1 && garbage[i].includes('G')) {
      g_to = i;
    }

    time += garbage[i].length;
  }

  for (let i = 0; i < travel.length; i++) {
    if (i < m_to) {
      time += travel[i];
    }
    if (i < p_to) {
      time += travel[i];
    }
    if (i < g_to) {
      time += travel[i];
    }
  }

  return time;
};

const garbage = ['G', 'P', 'GP', 'GG'];
const travel = [2, 4, 3];
console.log(garbageCollection(garbage, travel));
