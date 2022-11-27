pub fn count_points(points: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {
    let mut answer = Vec::with_capacity(queries.len());

    for query in &queries {
        let mut count = 0;

        for point in &points {
            let x2 = (point[0] - query[0]) * (point[0] - query[0]);
            let y2 = (point[1] - query[1]) * (point[1] - query[1]);
            if x2 + y2 <= query[2] * query[2] {
                count = count + 1;
            }
        }

        answer.push(count)
    }

    answer
}