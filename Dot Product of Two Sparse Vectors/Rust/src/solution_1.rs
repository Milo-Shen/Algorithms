pub struct SparseVector {
    v: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl SparseVector {
    pub fn new(nums: Vec<i32>) -> Self {
        SparseVector { v: nums }
    }

    // Return the dotProduct of two sparse vectors
    pub fn dot_product(&self, vec: SparseVector) -> i32 {
        let mut sum = 0;
        for i in 0..self.v.len() {
            sum += self.v[i] * vec.v[i];
        }
        sum
    }
}

