function solution_1(gas, cost) {
  if (!gas || !gas.length || !cost || !cost.length || cost.length !== gas.length) {
    return -1;
  }

  let totalSum = 0;
  for (let idx = 0; idx < gas.length; idx++) {
    totalSum += gas[idx] - cost[idx];
  }

  if (totalSum < 0) {
    return -1;
  }

  let culSum = 0;
  let startIdx = 0;
  for (let idx = 0; idx < gas.length; idx++) {
    if (culSum + gas[idx] - cost[idx] < 0) {
      startIdx = idx + 1;
      culSum = 0;
    } else {
      culSum += gas[idx] - cost[idx];
    }
  }

  return startIdx;
}

console.log(solution_1([2, 0, 1, 2, 3, 4, 0], [0, 1, 0, 0, 0, 0, 11]));
