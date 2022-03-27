pub fn solution(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
    let gas_len = gas.len();
    let cost_len = cost.len();

    if gas_len == 0 || cost_len == 0 || gas_len != cost_len {
        return -1;
    }

    let mut total_sum = 0;
    for i in 0..gas_len {
        total_sum += gas[i] - cost[i];
    }

    if total_sum < 0 {
        return -1;
    }

    let mut remain_oil = 0;
    let mut start_pos = 0;
    for i in 0..gas_len {
        if remain_oil + gas[i] - cost[i] < 0 {
            start_pos = i + 1;
            remain_oil = 0;
        } else {
            remain_oil = remain_oil + gas[i] - cost[i];
        }
    }

    start_pos as i32
}