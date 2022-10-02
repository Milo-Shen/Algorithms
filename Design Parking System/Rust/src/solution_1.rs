// https://leetcode.cn/problems/design-parking-system/

pub struct ParkingSystem {
    capacity: [i32; 3],
    count: [i32; 3],
}

impl ParkingSystem {
    pub fn new(big: i32, medium: i32, small: i32) -> Self {
        ParkingSystem {
            capacity: [big, medium, small],
            count: [0, 0, 0],
        }
    }

    pub fn add_car(&mut self, car_type: i32) -> bool {
        let pos = car_type as usize - 1;
        if self.count[pos] < self.capacity[pos] {
            self.count[pos] = self.count[pos] + 1;
            return true;
        }

        return false;
    }
}