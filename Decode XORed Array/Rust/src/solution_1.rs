// https://leetcode.cn/problems/decode-xored-array/submissions/

pub fn decode(encoded: Vec<i32>, first: i32) -> Vec<i32> {
    let len = encoded.len() + 1;
    let mut answer = vec![0; len];

    answer[0] = first;

    for i in 1..len {
        answer[i] = answer[i - 1] ^ encoded[i - 1];
    }

    answer
}