// https://leetcode.cn/problems/destination-city/

use std::collections::HashSet;

pub fn dest_city(paths: Vec<Vec<String>>) -> String {
    let mut set = HashSet::new();

    let path_len = paths.len();

    for i in (0..path_len) {
        set.insert(&paths[i][0]);
    }

    for i in (0..path_len) {
        let dest = &paths[i][1];
        if !set.contains(dest) {
            return dest.clone();
        }
    }

    String::from("")
}