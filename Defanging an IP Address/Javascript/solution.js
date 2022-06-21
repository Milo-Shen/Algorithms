// https://leetcode.cn/problems/defanging-an-ip-address/

function defangIPaddr(address) {
  return address.replaceAll('.', '[.]');
}

console.log(defangIPaddr('1.1.1.1'));
