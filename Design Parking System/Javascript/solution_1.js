// https://leetcode.cn/problems/design-parking-system/

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function (big, medium, small) {
  this.capacity = [big, medium, small];
  this.count = [0, 0, 0];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.count[carType - 1] < this.capacity[carType - 1]) {
    this.count[carType - 1]++;
    return true;
  }

  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
let obj = new ParkingSystem(1, 1, 1);
obj.addCar(1);
