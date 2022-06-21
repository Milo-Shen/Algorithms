pub fn max_number_of_apples(weight: Vec<i32>) -> i32 {
    // 异常处理
    let weight_len = weight.len();
    if weight_len == 0 {
        return 0;
    }

    // 最大可以装的苹果数量
    let mut total = 0;
    // 篮子承重的最大值
    let mut max = 5000;

    let mut sorted_weight = weight;
    sorted_weight.sort();

    for i in 0..weight_len {
        max = max - sorted_weight[i];
        if max >= 0 {
            total = total + 1
        } else {
            return total;
        }
    }

    total
}