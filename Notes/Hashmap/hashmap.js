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

var longestPalindrome = function (s) {
  let answer = 0;
  let check = {};

  for (let char of s) {
    check[char] = (check[char] || 0) + 1;
    if (check[char] % 2 === 0) answer += 2;
  }

  return s.length > answer ? answer + 1 : answer;
};

console.log(longestPalindrome('abccccdde'));
console.log(longestPalindrome('cccedd'));
