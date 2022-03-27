function solution(gas, cost) {
  let length = gas.length;
  let left = 0;
  while (gas[left] < cost[left]) {
    left++;
  }
  let remain_oil = 0;
  for (let i = left; i < length; i++) {
      remain_oil = remain_oil + gas[i] - cost[i];
  }
}
