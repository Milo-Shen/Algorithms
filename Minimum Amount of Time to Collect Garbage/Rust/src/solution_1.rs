// https://leetcode.cn/problems/minimum-amount-of-time-to-collect-garbage/

pub fn garbage_collection(garbage: Vec<String>, travel: Vec<i32>) -> i32 {
    let mut m_to = -1;
    let mut p_to = -1;
    let mut g_to = -1;
    let mut time: i32 = 0;

    for i in (0..garbage.len()).rev() {
        if m_to == -1 && garbage[i].find('M').is_some() {
            m_to = i as i32;
        }
        if p_to == -1 && garbage[i].find('P').is_some() {
            p_to = i as i32;
        }
        if g_to == -1 && garbage[i].find('G').is_some() {
            g_to = i as i32;
        }

        time += garbage[i].len() as i32;
    }

    for i in 0..travel.len() {
        let pos = i as i32;
        if pos < m_to {
            time += travel[i];
        }
        if pos < p_to {
            time += travel[i];
        }
        if pos < g_to {
            time += travel[i];
        }
    }

    time
}