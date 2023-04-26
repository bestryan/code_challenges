let hashMap = new Map();
hashMap.set(1, 100);
hashMap.set(2, 'rice');
hashMap.set(3, true);
hashMap.set(4, false);
hashMap.set('orange', 26);
hashMap.set(1, 'apple');
//console.log(hashMap);
// hashMap.key() hashMap.value()
// for (e of hashMap) {
//   console.log(e);
// }
// delete key
hashMap.delete('orange');
hashMap.clear();
console.log(hashMap);

var isValid = function (s) {
  const map = { '(': ')', '{': '}', '[': ']' };
  let stack = [];
  for (let ch of s) {
    if (map[ch]) {
      stack.push(map[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      return false;
    }
  }
  return !stack.length;
};
